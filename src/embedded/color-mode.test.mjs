import assert from 'node:assert/strict';
import test from 'node:test';
import {stripColorModeBootstrap} from './color-mode.mjs';

test('stripColorModeBootstrap removes documentElement data-theme bootstrap scripts', () => {
  const html = `<html><body>
<script>!function(){var t=window.localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",t||"light");document.documentElement.setAttribute("data-theme-choice",t||"light")}()</script>
<div id=__docusaurus></div>
<script src=/docs/assets/js/main.abc.js></script>
</body></html>`;
  const output = stripColorModeBootstrap(html);
  assert.doesNotMatch(output, /document\.documentElement\.setAttribute\(["']data-theme/);
  assert.doesNotMatch(output, /localStorage\.getItem\(["']theme/);
  assert.match(output, /id=__docusaurus/);
  assert.match(output, /src=\/docs\/assets\/js\/main\.abc\.js/);
});

test('stripColorModeBootstrap removes data-theme attributes from the html element', () => {
  const html = `<html lang="en" data-theme="light" data-theme-choice="light" data-has-hydrated="false"><body><div id="__docusaurus"></div></body></html>`;
  const output = stripColorModeBootstrap(html);
  assert.doesNotMatch(output, /<html\b[^>]*\bdata-theme=/);
  assert.doesNotMatch(output, /data-theme-choice/);
  assert.match(output, /data-has-hydrated="false"/);
  assert.match(output, /id="__docusaurus"/);
});
