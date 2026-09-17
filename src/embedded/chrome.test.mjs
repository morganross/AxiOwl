import assert from 'node:assert/strict';
import test from 'node:test';
import {
  chooseDocsSidebarSurface,
  getPaletteStorageKey,
  shouldOmitColorModeProvider,
  shouldOmitColorModeToggle,
  shouldRenderGlobalFooter,
  shouldRenderGlobalNavbar,
  shouldUseInFlowDocsSidebar,
  shouldUseTocHighlight,
  STANDALONE_PALETTE_STORAGE_KEY,
} from './chrome.mjs';

test('standalone mode keeps native chrome and the existing palette storage key', () => {
  assert.equal(shouldRenderGlobalNavbar(false), true);
  assert.equal(shouldRenderGlobalFooter(false), true);
  assert.equal(shouldOmitColorModeToggle(false), false);
  assert.equal(getPaletteStorageKey(false), STANDALONE_PALETTE_STORAGE_KEY);
  assert.equal(shouldOmitColorModeProvider(false), false);
  assert.equal(shouldUseInFlowDocsSidebar(false), false);
  assert.equal(shouldUseTocHighlight(false), true);
});

test('embedded mode omits navbar, footer, palette storage, and ColorModeProvider', () => {
  assert.equal(shouldRenderGlobalNavbar(true), false);
  assert.equal(shouldRenderGlobalFooter(true), false);
  assert.equal(shouldOmitColorModeToggle(true), true);
  assert.equal(getPaletteStorageKey(true), null);
  assert.equal(shouldOmitColorModeProvider(true), true);
  assert.equal(shouldUseInFlowDocsSidebar(true), true);
  assert.equal(shouldUseTocHighlight(true), false);
});

test('embedded docs sidebar stays in-flow on mobile instead of using a navbar drawer', () => {
  assert.equal(chooseDocsSidebarSurface(true, 'mobile'), 'in-flow-desktop');
  assert.equal(chooseDocsSidebarSurface(true, 'desktop'), 'in-flow-desktop');
  assert.equal(chooseDocsSidebarSurface(false, 'mobile'), 'mobile-drawer');
  assert.equal(chooseDocsSidebarSurface(false, 'desktop'), 'desktop');
  assert.equal(chooseDocsSidebarSurface(false, 'ssr'), 'desktop');
});
