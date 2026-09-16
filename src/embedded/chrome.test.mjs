import assert from 'node:assert/strict';
import test from 'node:test';
import {
  getPaletteStorageKey,
  shouldOmitColorModeToggle,
  shouldRenderGlobalFooter,
  shouldRenderGlobalNavbar,
  STANDALONE_PALETTE_STORAGE_KEY,
} from './chrome.mjs';

test('standalone mode keeps native chrome and the existing palette storage key', () => {
  assert.equal(shouldRenderGlobalNavbar(false), true);
  assert.equal(shouldRenderGlobalFooter(false), true);
  assert.equal(shouldOmitColorModeToggle(false), false);
  assert.equal(getPaletteStorageKey(false), STANDALONE_PALETTE_STORAGE_KEY);
});

test('embedded mode omits navbar, footer, and palette storage at render time', () => {
  assert.equal(shouldRenderGlobalNavbar(true), false);
  assert.equal(shouldRenderGlobalFooter(true), false);
  assert.equal(shouldOmitColorModeToggle(true), true);
  assert.equal(getPaletteStorageKey(true), null);
});
