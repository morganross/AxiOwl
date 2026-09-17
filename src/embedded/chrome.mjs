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

export function shouldOmitColorModeProvider(embedded) {
  return embedded === true;
}

export function shouldUseInFlowDocsSidebar(embedded) {
  return embedded === true;
}

export function chooseDocsSidebarSurface(embedded, windowSize) {
  if (shouldUseInFlowDocsSidebar(embedded)) {
    return 'in-flow-desktop';
  }
  if (windowSize === 'desktop' || windowSize === 'ssr') {
    return 'desktop';
  }
  if (windowSize === 'mobile') {
    return 'mobile-drawer';
  }
  return 'none';
}
