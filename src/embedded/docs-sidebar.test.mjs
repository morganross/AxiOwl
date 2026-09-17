import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {chooseDocsSidebarSurface} from './chrome.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

test('DocSidebar component uses in-flow desktop surface for every embedded window size', () => {
  const source = readFileSync(join(root, 'src/theme/DocSidebar/index.js'), 'utf8');
  assert.match(source, /chooseDocsSidebarSurface\(EMBEDDED, windowSize\)/);
  assert.match(source, /DocSidebarDesktop/);
  assert.match(source, /surface === 'in-flow-desktop'/);
  assert.doesNotMatch(source, /navbar-sidebar|navbar__toggle|hamburger/i);

  for (const windowSize of ['mobile', 'desktop', 'ssr', 'unknown']) {
    assert.equal(chooseDocsSidebarSurface(true, windowSize), 'in-flow-desktop');
  }
});
