import assert from 'node:assert/strict';
import test from 'node:test';
import {
  findUnscopedChromeSelectors,
  findUnscopedRuleSelectors,
  scopeGeneratedCss,
} from './scope-css.mjs';

test('scopeGeneratedCss prefixes type and generic component selectors under #__docusaurus', async () => {
  const input = `
html, body { margin: 0; }
:root { --ifm-color-primary: #123; }
a { color: red; }
p, h1 { margin: 0; }
.container { width: 100%; }
.button { display: inline-flex; }
`;
  const output = await scopeGeneratedCss(input);
  assert.match(output, /#__docusaurus\s*\{[^}]*margin:\s*0/);
  assert.match(output, /#__docusaurus\s*\{[^}]*--ifm-color-primary:\s*#123/);
  assert.match(output, /#__docusaurus\s+a\s*\{/);
  assert.match(output, /#__docusaurus\s+p\s*,\s*#__docusaurus\s+h1\s*\{/);
  assert.match(output, /#__docusaurus\s+\.container\s*\{/);
  assert.match(output, /#__docusaurus\s+\.button\s*\{/);
  assert.equal(findUnscopedChromeSelectors(output).length, 0);
});

test('scopeGeneratedCss preserves @font-face and @keyframes', async () => {
  const input = `
@font-face { font-family: Infima; src: url(font.woff2); }
@keyframes spin { from { opacity: 0; } to { opacity: 1; } }
`;
  const output = await scopeGeneratedCss(input);
  assert.match(output, /@font-face/);
  assert.match(output, /font-family:\s*Infima/);
  assert.match(output, /@keyframes\s+spin/);
  assert.match(output, /from\s*\{/);
  assert.doesNotMatch(output, /#__docusaurus\s+from/);
});

test('scopeGeneratedCss keeps already-scoped #__docusaurus rules and html[data-axiowl-theme] descendants', async () => {
  const input = `
#__docusaurus { color: var(--ax-ink); }
html[data-axiowl-theme] #__docusaurus { --axiowl-shell: var(--ax-shell); }
`;
  const output = await scopeGeneratedCss(input);
  assert.match(output, /html\[data-axiowl-theme\]\s+#__docusaurus/);
  assert.doesNotMatch(output, /#__docusaurus\s+#__docusaurus/);
  assert.equal(findUnscopedChromeSelectors(output).length, 0);
});

test('scopeGeneratedCss maps html/body/:root and attribute color-mode selectors onto #__docusaurus', async () => {
  const input = `
html[data-theme='dark'] { color: black; }
[data-theme='dark'] .alert { background: #111; }
`;
  const output = await scopeGeneratedCss(input);
  assert.match(output, /#__docusaurus\[data-theme='dark'\]/);
  assert.doesNotMatch(output, /(?:^|,)\s*html\[data-theme/m);
  assert.equal(findUnscopedRuleSelectors(output).length, 0);
});

test('findUnscopedChromeSelectors flags document/type/generic rules that can reach WordPress chrome', () => {
  const css = `
html, body { background: white; }
a { color: blue; }
.container { max-width: 960px; }
.button { border: 0; }
header { display: flex; }
`;
  const found = findUnscopedChromeSelectors(css);
  assert.ok(found.some((item) => item.includes('html') || item.includes('body')));
  assert.ok(found.some((item) => item.trim() === 'a' || item.includes('a')));
  assert.ok(found.some((item) => item.includes('.container')));
  assert.ok(found.some((item) => item.includes('.button')));
});
