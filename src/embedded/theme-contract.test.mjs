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
  assert.doesNotMatch(css, /^\s*html\s*,\s*body\s*\{/m);
  assert.doesNotMatch(css, /^\s*html\s*\{/m);
  assert.doesNotMatch(css, /^\s*body\s*\{/m);
  assert.match(css, /theme-doc-sidebar-container/);
  assert.match(css, /996px|997px/);
  assert.match(css, /:has\(>\s*\.theme-doc-sidebar-container\)/);
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

test('embedded Layout Provider omits ColorModeProvider and keeps the other providers', () => {
  const provider = readSrc('src/theme/Layout/Provider/index.js');
  assert.match(provider, /AXIOWL_DOCS_EMBEDDED/);
  assert.match(provider, /shouldOmitColorModeProvider/);
  assert.match(provider, /AnnouncementBarProvider/);
  assert.match(provider, /ScrollControllerProvider/);
  assert.match(provider, /DocsPreferredVersionContextProvider/);
  assert.match(provider, /PluginHtmlClassNameProvider/);
  assert.match(provider, /NavbarProvider/);
  assert.doesNotMatch(provider, /\bfetch\s*\(/);
});

test('embedded DocSidebar keeps the in-page docs sidebar instead of a navbar drawer', () => {
  const sidebar = readSrc('src/theme/DocSidebar/index.js');
  assert.match(sidebar, /chooseDocsSidebarSurface/);
  assert.match(sidebar, /DocSidebarDesktop/);
  assert.match(sidebar, /in-flow-desktop/);
  assert.doesNotMatch(sidebar, /navbar__toggle|hamburger/i);
});

test('embedded color-mode stub does not touch document or theme storage', () => {
  const stub = readSrc('src/embedded/color-mode-stub.js');
  assert.doesNotMatch(stub, /document\.documentElement/);
  assert.doesNotMatch(stub, /localStorage/);
  assert.doesNotMatch(stub, /data-theme/);
  assert.match(stub, /ColorModeProvider/);
  assert.match(stub, /useColorMode/);
});
