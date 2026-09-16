import {existsSync, readFileSync, readdirSync} from 'node:fs';
import {join, relative, resolve} from 'node:path';
import {execFileSync} from 'node:child_process';
import {WORDPRESS_THEME_VARS} from '../src/embedded/profile.mjs';
import {
  EMBEDDED_MANIFEST_FILENAME,
  readSourceCommit,
  validateManifest,
} from '../src/embedded/manifest.mjs';

const DOC_ROUTES = ['intro', 'use-cases', 'providers', 'mobile', 'security'];
const mode = parseMode(process.argv);
const positional = process.argv.slice(2).filter((arg) => !arg.startsWith('--'));
const rootDir = resolve(positional[0] ?? 'build');

function fail(message) {
  console.error(message);
  process.exit(1);
}

function parseMode(argv) {
  const flag = argv.find((arg) => arg.startsWith('--mode='));
  return flag ? flag.slice('--mode='.length) : 'embedded';
}

function read(relativePath) {
  return readFileSync(join(rootDir, relativePath), 'utf8');
}

function listFiles(dir, suffix = '') {
  const out = [];
  for (const entry of readdirSync(dir, {withFileTypes: true})) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...listFiles(full, suffix));
    } else if (!suffix || entry.name.endsWith(suffix)) {
      out.push(full);
    }
  }
  return out;
}

function hasNavbar(html) {
  return /theme-layout-navbar|\bnavbar navbar--|\bclass="[^"]*\bnavbar\b|\bclass=navbar\b/.test(html);
}

if (mode === 'standalone') {
  const html = read('index.html');
  if (!hasNavbar(html)) {
    fail('standalone index.html is missing the native Docusaurus navbar');
  }
  if (!html.includes('AxiOwl color palette') && !html.includes('navbar__download-link')) {
    fail('standalone index.html is missing native Docusaurus chrome');
  }
  if (existsSync(join(rootDir, EMBEDDED_MANIFEST_FILENAME))) {
    fail('standalone build must not emit the embedded manifest');
  }
  if (!existsSync(join(rootDir, 'docs', 'providers.html')) && !existsSync(join(rootDir, 'docs', 'providers', 'index.html'))) {
    fail('standalone build is missing the providers docs route');
  }
  console.log('ok standalone build chrome and docs routes');
  process.exit(0);
}

const manifestPath = join(rootDir, EMBEDDED_MANIFEST_FILENAME);
if (!existsSync(manifestPath)) {
  fail(`missing ${EMBEDDED_MANIFEST_FILENAME} in ${rootDir}`);
}

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const result = validateManifest(manifest, {rootDir});
if (!result.ok) {
  fail(result.error);
}

const head = readSourceCommit({execFileSync});
if (manifest.source_commit !== head) {
  fail(`source_commit ${manifest.source_commit} does not match HEAD ${head}`);
}

if (manifest.base_path !== '/docs/') {
  fail(`base_path must be /docs/, got ${manifest.base_path}`);
}

const home = read(manifest.entry_html);
if (hasNavbar(home)) {
  fail('embedded index.html still contains a Docusaurus navbar');
}
if (home.includes('Get in touch')) {
  fail('embedded index.html still contains the Docusaurus footer');
}
if (home.includes('AxiOwl color palette')) {
  fail('embedded index.html still contains the docs palette picker');
}
if (home.includes('id=__docusaurus') === false && home.includes('id="__docusaurus"') === false) {
  fail('embedded index.html is missing SSR #__docusaurus content');
}
if (home.includes('/docs/docs/')) {
  fail('embedded index.html prefixes /docs more than once');
}
if (home.includes('wp-content')) {
  fail('embedded HTML must not be addressable under wp-content');
}

for (const route of DOC_ROUTES) {
  const routeFile = join(rootDir, route, 'index.html');
  if (!existsSync(routeFile)) {
    fail(`missing docs route SSR: ${route}/index.html`);
  }
  const html = readFileSync(routeFile, 'utf8');
  if (hasNavbar(html)) {
    fail(`${route} SSR still contains a Docusaurus navbar`);
  }
  if (html.includes('Get in touch')) {
    fail(`${route} SSR still contains the Docusaurus footer`);
  }
  if (html.includes('AxiOwl color palette')) {
    fail(`${route} SSR still contains the docs palette picker`);
  }
  if (!html.includes('__docusaurus')) {
    fail(`${route} SSR is missing #__docusaurus`);
  }
  if (!html.includes('theme-doc-sidebar')) {
    fail(`${route} SSR is missing the docs sidebar`);
  }
}

if (existsSync(join(rootDir, 'not-a-real-doc', 'index.html'))) {
  fail('unknown docs routes must not be synthesized');
}

for (const file of listFiles(rootDir)) {
  if (!/\.(html|js|css|json)$/i.test(file)) {
    continue;
  }
  const text = readFileSync(file, 'utf8');
  if (text.includes('axiowl-docs-palette-v1')) {
    fail(`embedded build contains palette storage key in ${relative(rootDir, file)}`);
  }
  if (text.includes('/wp-content/axiowl-docs/')) {
    fail(`embedded build contains wp-content docs path in ${relative(rootDir, file)}`);
  }
}

for (const style of manifest.styles) {
  const css = readFileSync(join(rootDir, style.replace(/^\/docs\//, '')), 'utf8');
  for (const name of WORDPRESS_THEME_VARS) {
    if (!css.includes(`var(${name})`)) {
      fail(`missing WordPress theme variable ${name} in ${style}`);
    }
  }
  if (css.includes('header') && /header[^{]*\{[^}]*display:\s*none/.test(css)) {
    fail('embedded CSS hides header chrome');
  }
}

console.log(`ok ${EMBEDDED_MANIFEST_FILENAME}`);
console.log(`schema=${manifest.schema}`);
console.log(`source_commit=${manifest.source_commit}`);
console.log(`build_id=${manifest.build_id}`);
console.log(`base_path=${manifest.base_path}`);
console.log(`styles=${manifest.styles.length}`);
console.log(`scripts=${manifest.scripts.length}`);
