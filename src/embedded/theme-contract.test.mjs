import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {WORDPRESS_THEME_VARS} from './profile.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

function readSrc(relativePath) {
  return readFileSync(join(root, relativePath), 'utf8');
}

test('embedded CSS maps Infima/docs variables to WordPress --ax-* and scopes to #__docusaurus', () => {
  const css = readSrc('src/css/embedded.css');
  assert.match(css, /#__docusaurus/);
  assert.match(css, /data-axiowl-theme/);
  for (const name of WORDPRESS_THEME_VARS) {
    assert.match(css, new RegExp(`var\\(${name}\\)`));
  }
  assert.doesNotMatch(css, /display:\s*none/);
  assert.doesNotMatch(css, /axiowl-docs-palette-v1/);
  assert.doesNotMatch(css, /wp-content/);
});

test('docusaurus config uses the embedded profile with /docs/ baseUrl', () => {
  const config = readSrc('docusaurus.config.js');
  assert.match(config, /createDocsProfile/);
  assert.match(config, /axiowlDocsEmbedded/);
});

test('Navbar omits itself at render time and does not fetch WordPress chrome', () => {
  const navbar = readSrc('src/theme/Navbar/index.js');
  assert.doesNotMatch(navbar, /\bfetch\s*\(/);
  assert.doesNotMatch(navbar, /dangerouslySetInnerHTML/);
  assert.doesNotMatch(navbar, /axiowl-global-chrome/);
  assert.match(navbar, /AXIOWL_DOCS_EMBEDDED/);
});

test('Footer omits itself at render time in embedded builds', () => {
  const footer = readSrc('src/theme/Footer/index.js');
  assert.match(footer, /AXIOWL_DOCS_EMBEDDED/);
});

test('ColorModeToggle has no palette storage access in embedded builds', () => {
  const toggle = readSrc('src/theme/Navbar/ColorModeToggle/index.js');
  assert.match(toggle, /AXIOWL_DOCS_EMBEDDED/);
  assert.doesNotMatch(toggle, /axiowl-color-theme-v1/);
});

test('docs landing prefixes /docs exactly once via docsContentPath', () => {
  const page = readSrc('src/pages/index.js');
  assert.match(page, /docsContentPath/);
  assert.doesNotMatch(page, /to: '\/docs\//);
});
