import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {
  createDocsProfile,
  docsContentPath,
  EMBEDDED_BASE_PATH,
  WORDPRESS_THEME_VARS,
} from './profile.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

test('default profile keeps GitHub Pages start/build paths', () => {
  const profile = createDocsProfile({});
  assert.equal(profile.embedded, false);
  assert.equal(profile.url, 'https://morganross.github.io');
  assert.equal(profile.baseUrl, '/AxiOwl/');
  assert.equal(profile.docsRouteBasePath, 'docs');
  assert.equal(profile.hideGlobalNavbar, false);
  assert.equal(profile.hideGlobalFooter, false);
  assert.equal(profile.omitColorModeToggle, false);
});

test('AXIOWL_SELF_HOSTED=1 keeps standalone /docs/ chrome', () => {
  const profile = createDocsProfile({AXIOWL_SELF_HOSTED: '1'});
  assert.equal(profile.embedded, false);
  assert.equal(profile.baseUrl, '/docs/');
  assert.equal(profile.docsRouteBasePath, '/');
  assert.equal(profile.hideGlobalNavbar, false);
  assert.equal(profile.hideGlobalFooter, false);
});

test('AXIOWL_DOCS_EMBEDDED=1 uses /docs/ as baseUrl and router basename', () => {
  const profile = createDocsProfile({AXIOWL_DOCS_EMBEDDED: '1'});
  assert.equal(profile.embedded, true);
  assert.equal(profile.url, 'https://axiowl.com');
  assert.equal(profile.baseUrl, '/docs/');
  assert.equal(profile.baseUrl, EMBEDDED_BASE_PATH);
  assert.equal(profile.docsRouteBasePath, '/');
  assert.equal(profile.trailingSlash, true);
  assert.equal(profile.hideGlobalNavbar, true);
  assert.equal(profile.hideGlobalFooter, true);
  assert.equal(profile.omitColorModeToggle, true);
  assert.equal(profile.useWordpressThemeVariables, true);
  assert.doesNotMatch(profile.baseUrl, /wp-content/);
  assert.deepEqual(profile.customCss, ['./src/css/custom.css', './src/css/embedded.css']);
  assert.ok(WORDPRESS_THEME_VARS.includes('--ax-shell'));
});

test('embedded profile does not switch baseUrl when self-hosted is also set', () => {
  const profile = createDocsProfile({
    AXIOWL_DOCS_EMBEDDED: '1',
    AXIOWL_SELF_HOSTED: '1',
  });
  assert.equal(profile.baseUrl, '/docs/');
  assert.equal(profile.embedded, true);
});

test('docsContentPath prefixes /docs exactly once', () => {
  assert.equal(docsContentPath('docs', 'providers'), '/docs/providers');
  assert.equal(docsContentPath('/', 'providers'), '/providers');
  assert.equal(docsContentPath('/', '/use-cases'), '/use-cases');
});

test('npm start and npm build scripts stay the normal Docusaurus commands', () => {
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
  assert.equal(pkg.scripts.start, 'docusaurus start');
  assert.equal(pkg.scripts.build, 'docusaurus build');
});
