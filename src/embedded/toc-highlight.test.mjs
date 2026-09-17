import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {shouldUseTocHighlight} from './chrome.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

test('standalone keeps navbar-dependent TOC highlighting; embedded skips it', () => {
  assert.equal(shouldUseTocHighlight(false), true);
  assert.equal(shouldUseTocHighlight(true), false);
});

test('TOCItems wrapper never calls useTOCHighlight and still renders the TOC tree', () => {
  const source = readFileSync(join(root, 'src/theme/TOCItems/index.js'), 'utf8');
  assert.match(source, /AXIOWL_DOCS_EMBEDDED/);
  assert.match(source, /shouldUseTocHighlight\(EMBEDDED\)/);
  assert.match(source, /@theme-original\/TOCItems/);
  assert.match(source, /TOCItemTree/);
  assert.match(source, /useFilteredAndTreeifiedTOC/);
  assert.doesNotMatch(source, /useTOCHighlight/);
  assert.doesNotMatch(source, /querySelector\(\s*['"]\.navbar['"]\s*\)/);
  assert.doesNotMatch(source, /clientHeight/);
});
