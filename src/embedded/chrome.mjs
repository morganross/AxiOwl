export const STANDALONE_PALETTE_STORAGE_KEY = 'axiowl-docs-palette-v1';

export function shouldRenderGlobalNavbar(embedded) {
  return embedded !== true;
}

export function shouldRenderGlobalFooter(embedded) {
  return embedded !== true;
}

export function shouldOmitColorModeToggle(embedded) {
  return embedded === true;
}

export function getPaletteStorageKey(embedded) {
  return embedded === true ? null : STANDALONE_PALETTE_STORAGE_KEY;
}
