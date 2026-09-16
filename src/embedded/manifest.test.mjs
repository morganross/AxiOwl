import assert from 'node:assert/strict';
import test from 'node:test';
import {mkdtemp, mkdir, readFile, rm, writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {
  EMBEDDED_BASE_PATH,
  EMBEDDED_MANIFEST_FILENAME,
  MANIFEST_KEYS,
  MANIFEST_SCHEMA,
  buildManifest,
  extractAssetsFromHtml,
  readSourceCommit,
  validateManifest,
  writeEmbeddedManifest,
} from './manifest.mjs';

const COMMIT = '0123456789abcdef0123456789abcdef01234567';

const fixtureHtml = `<!doctype html><html><head>
<link rel=stylesheet href=/docs/assets/css/styles.b28f9458.css />
<script src=/docs/assets/js/runtime~main.501b0651.js defer></script>
<script src=/docs/assets/js/main.bd816491.js defer></script>
</head><body><div id=__docusaurus></div></body></html>`;

test('extractAssetsFromHtml emits same-origin /docs/ hashed asset paths in document order', () => {
  const assets = extractAssetsFromHtml(fixtureHtml, EMBEDDED_BASE_PATH);
  assert.deepEqual(assets.styles, ['/docs/assets/css/styles.b28f9458.css']);
  assert.deepEqual(assets.scripts, [
    '/docs/assets/js/runtime~main.501b0651.js',
    '/docs/assets/js/main.bd816491.js',
  ]);
});

test('extractAssetsFromHtml normalizes quoted and relative paths onto /docs/', () => {
  const html = `
    <link rel="stylesheet" href="./assets/css/styles.abc123.css">
    <script src="/docs/assets/js/runtime~main.111aaa.js"></script>
    <script src="assets/js/main.def456.js"></script>
  `;
  const assets = extractAssetsFromHtml(html, '/docs/');
  assert.deepEqual(assets.styles, ['/docs/assets/css/styles.abc123.css']);
  assert.deepEqual(assets.scripts, [
    '/docs/assets/js/runtime~main.111aaa.js',
    '/docs/assets/js/main.def456.js',
  ]);
});

test('buildManifest emits a closed document with base_path /docs/', () => {
  const manifest = buildManifest({
    sourceCommit: COMMIT,
    buildId: `${COMMIT}-20260916T234800Z`,
    basePath: '/docs/',
    styles: ['/docs/assets/css/styles.b28f9458.css'],
    scripts: [
      '/docs/assets/js/runtime~main.501b0651.js',
      '/docs/assets/js/main.bd816491.js',
    ],
    builtAt: '2026-09-16T23:48:00.000Z',
  });
  assert.deepEqual(Object.keys(manifest), [...MANIFEST_KEYS]);
  assert.equal(manifest.schema, MANIFEST_SCHEMA);
  assert.equal(manifest.base_path, '/docs/');
  assert.equal(manifest.entry_html, 'index.html');
});

test('validateManifest rejects extra keys, wp-content paths, and unhashed assets', () => {
  const manifest = buildManifest({
    sourceCommit: COMMIT,
    buildId: 'build-1',
    basePath: '/docs/',
    styles: ['/docs/assets/css/styles.b28f9458.css'],
    scripts: [
      '/docs/assets/js/runtime~main.501b0651.js',
      '/docs/assets/js/main.bd816491.js',
    ],
    builtAt: '2026-09-16T23:48:00.000Z',
  });
  assert.equal(validateManifest(manifest).ok, true);

  const extra = {...manifest, pages: ['index.html']};
  assert.equal(validateManifest(extra).ok, false);
  assert.match(validateManifest(extra).error, /extra|closed|unknown/i);

  const wpContent = {
    ...manifest,
    styles: ['/wp-content/axiowl-docs/current/assets/css/styles.b28f9458.css'],
  };
  assert.equal(validateManifest(wpContent).ok, false);

  const unhashed = {
    ...manifest,
    scripts: ['/docs/assets/js/main.js'],
  };
  assert.equal(validateManifest(unhashed).ok, false);

  const relative = {
    ...manifest,
    styles: ['assets/css/styles.b28f9458.css'],
  };
  assert.equal(validateManifest(relative).ok, false);
});

test('readSourceCommit requires a 40-character hex Git SHA', () => {
  assert.equal(readSourceCommit({execFileSync: () => `${COMMIT}\n`}), COMMIT);
  assert.throws(
    () => readSourceCommit({execFileSync: () => 'HEAD\n'}),
    /source commit/i,
  );
});

test('writeEmbeddedManifest writes closed JSON beside index.html', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'axiowl-docs-manifest-'));
  try {
    await mkdir(join(dir, 'assets', 'css'), {recursive: true});
    await mkdir(join(dir, 'assets', 'js'), {recursive: true});
    await writeFile(join(dir, 'index.html'), fixtureHtml);
    await writeFile(join(dir, 'assets', 'css', 'styles.b28f9458.css'), '/* css */');
    await writeFile(join(dir, 'assets', 'js', 'runtime~main.501b0651.js'), '// js');
    await writeFile(join(dir, 'assets', 'js', 'main.bd816491.js'), '// js');

    const written = await writeEmbeddedManifest({
      outDir: dir,
      htmlFiles: [join(dir, 'index.html')],
      basePath: '/docs/',
      sourceCommit: COMMIT,
      builtAt: '2026-09-16T23:48:00.000Z',
      buildId: `${COMMIT}-20260916T234800Z`,
    });

    assert.equal(written, join(dir, EMBEDDED_MANIFEST_FILENAME));
    const parsed = JSON.parse(await readFile(written, 'utf8'));
    assert.equal(parsed.base_path, '/docs/');
    assert.equal(validateManifest(parsed, {rootDir: dir}).ok, true);
  } finally {
    await rm(dir, {recursive: true, force: true});
  }
});
