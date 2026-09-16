import {execFileSync as defaultExecFileSync} from 'node:child_process';
import {existsSync} from 'node:fs';
import {readFile, writeFile} from 'node:fs/promises';
import {join} from 'node:path';

export const MANIFEST_SCHEMA = 'axiowl-docs-manifest-v1';
export const EMBEDDED_MANIFEST_FILENAME = 'axiowl-docs-manifest-v1.json';
export const EMBEDDED_BASE_PATH = '/docs/';
export const MANIFEST_KEYS = [
  'schema',
  'source_commit',
  'build_id',
  'base_path',
  'entry_html',
  'styles',
  'scripts',
  'built_at',
];

const STYLE_PATH = /^\/docs\/assets\/css\/[^/]+\.[a-z0-9]+\.css$/;
const SCRIPT_PATH = /^\/docs\/assets\/js\/[^/]+\.[a-z0-9]+\.js$/;

export function readSourceCommit({execFileSync = defaultExecFileSync} = {}) {
  const value = String(execFileSync('git', ['rev-parse', 'HEAD'], {encoding: 'utf8'})).trim();
  if (!/^[0-9a-f]{40}$/i.test(value)) {
    throw new Error(`Invalid source commit: ${value}`);
  }
  return value.toLowerCase();
}

export function extractAssetsFromHtml(html, basePath = EMBEDDED_BASE_PATH) {
  const styles = [];
  const scripts = [];

  for (const match of html.matchAll(/<link\b[^>]*>/gi)) {
    const tag = match[0];
    if (getAttr(tag, 'rel')?.toLowerCase() !== 'stylesheet') {
      continue;
    }
    const normalized = normalizeAssetPath(getAttr(tag, 'href'), basePath);
    if (normalized && STYLE_PATH.test(normalized)) {
      styles.push(normalized);
    }
  }

  for (const match of html.matchAll(/<script\b[^>]*>/gi)) {
    const normalized = normalizeAssetPath(getAttr(match[0], 'src'), basePath);
    if (normalized && SCRIPT_PATH.test(normalized)) {
      scripts.push(normalized);
    }
  }

  return {
    styles: unique(styles),
    scripts: unique(scripts),
  };
}

export function buildManifest({
  sourceCommit,
  buildId,
  basePath = EMBEDDED_BASE_PATH,
  entryHtml = 'index.html',
  styles,
  scripts,
  builtAt,
}) {
  return {
    schema: MANIFEST_SCHEMA,
    source_commit: sourceCommit,
    build_id: buildId,
    base_path: basePath,
    entry_html: entryHtml,
    styles,
    scripts,
    built_at: builtAt,
  };
}

export function validateManifest(manifest, {rootDir} = {}) {
  if (manifest == null || typeof manifest !== 'object' || Array.isArray(manifest)) {
    return {ok: false, error: 'manifest must be an object'};
  }

  const keys = Object.keys(manifest);
  const extra = keys.filter((key) => !MANIFEST_KEYS.includes(key));
  if (extra.length > 0) {
    return {ok: false, error: `closed manifest has extra keys: ${extra.join(', ')}`};
  }

  const missing = MANIFEST_KEYS.filter((key) => !keys.includes(key));
  if (missing.length > 0) {
    return {ok: false, error: `closed manifest missing keys: ${missing.join(', ')}`};
  }

  if (manifest.schema !== MANIFEST_SCHEMA) {
    return {ok: false, error: `unexpected schema: ${manifest.schema}`};
  }
  if (typeof manifest.source_commit !== 'string' || !/^[0-9a-f]{40}$/.test(manifest.source_commit)) {
    return {ok: false, error: 'invalid source_commit'};
  }
  if (typeof manifest.build_id !== 'string' || manifest.build_id.length === 0) {
    return {ok: false, error: 'invalid build_id'};
  }
  if (manifest.base_path !== EMBEDDED_BASE_PATH) {
    return {ok: false, error: 'invalid base_path'};
  }
  if (manifest.entry_html !== 'index.html') {
    return {ok: false, error: 'invalid entry_html'};
  }
  if (!isAssetList(manifest.styles, STYLE_PATH)) {
    return {ok: false, error: 'invalid styles'};
  }
  if (!isAssetList(manifest.scripts, SCRIPT_PATH) || manifest.scripts.length < 2) {
    return {ok: false, error: 'invalid scripts'};
  }
  if (!isUtcTimestamp(manifest.built_at)) {
    return {ok: false, error: 'built_at must be a UTC timestamp'};
  }
  if (manifest.styles.some(isWpContentPath) || manifest.scripts.some(isWpContentPath)) {
    return {ok: false, error: 'wp-content asset paths are not allowed'};
  }

  if (rootDir) {
    const required = [manifest.entry_html, ...manifest.styles.map(toFilesystemPath), ...manifest.scripts.map(toFilesystemPath)];
    for (const relative of required) {
      if (!existsSync(join(rootDir, relative))) {
        return {ok: false, error: `missing build file: ${relative}`};
      }
    }
  }

  return {ok: true};
}

export async function writeEmbeddedManifest({
  outDir,
  html,
  htmlFiles = [],
  basePath = EMBEDDED_BASE_PATH,
  sourceCommit,
  builtAt,
  buildId,
}) {
  const styles = [];
  const scripts = [];

  if (html) {
    mergeAssets(styles, scripts, extractAssetsFromHtml(html, basePath));
  }
  for (const file of htmlFiles) {
    const text = await readFile(file, 'utf8');
    mergeAssets(styles, scripts, extractAssetsFromHtml(text, basePath));
  }

  const manifest = buildManifest({
    sourceCommit,
    buildId: buildId ?? `${sourceCommit}-${toBuildIdStamp(builtAt)}`,
    basePath,
    styles,
    scripts,
    builtAt,
  });
  const result = validateManifest(manifest, {rootDir: outDir});
  if (!result.ok) {
    throw new Error(result.error);
  }

  const dest = join(outDir, EMBEDDED_MANIFEST_FILENAME);
  await writeFile(dest, `${JSON.stringify(manifest, null, 2)}\n`);
  return dest;
}

function getAttr(tag, name) {
  const quoted = new RegExp(`\\b${name}=["']([^"']+)["']`, 'i').exec(tag);
  if (quoted) {
    return quoted[1];
  }
  const unquoted = new RegExp(`\\b${name}=([^\\s>]+)`, 'i').exec(tag);
  return unquoted?.[1] ?? null;
}

function normalizeAssetPath(raw, basePath) {
  if (!raw) {
    return null;
  }

  let value = raw.trim().replace(/&amp;/g, '&').split('#')[0].split('?')[0];
  if (/^(?:https?:|data:|\/\/)/i.test(value) || value.includes('wp-content')) {
    return null;
  }
  if (value.startsWith('./')) {
    value = value.slice(2);
  }

  const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  if (value.startsWith(normalizedBase)) {
    value = value.slice(normalizedBase.length);
  }
  value = value.replace(/^\/+/, '');
  if (!value.startsWith('assets/')) {
    return null;
  }
  return `${normalizedBase}${value}`;
}

function unique(values) {
  return [...new Set(values)];
}

function mergeAssets(styles, scripts, next) {
  for (const item of next.styles) {
    if (!styles.includes(item)) {
      styles.push(item);
    }
  }
  for (const item of next.scripts) {
    if (!scripts.includes(item)) {
      scripts.push(item);
    }
  }
}

function isAssetList(value, pattern) {
  return Array.isArray(value) && value.length > 0 && value.every((item) => typeof item === 'string' && pattern.test(item));
}

function isUtcTimestamp(value) {
  return typeof value === 'string' && value.endsWith('Z') && !Number.isNaN(Date.parse(value));
}

function toBuildIdStamp(builtAt) {
  return builtAt.replace(/\.\d+Z$/, 'Z').replace(/[-:]/g, '');
}

function isWpContentPath(value) {
  return String(value).includes('wp-content');
}

function toFilesystemPath(assetPath) {
  return assetPath.replace(/^\/docs\//, '');
}
