import postcss from 'postcss';
import selectorParser from 'postcss-selector-parser';

const SCOPE_ID = '__docusaurus';
const DOCUMENT_TAGS = new Set(['html', 'body']);
const CHROME_TAGS = new Set([
  'html',
  'body',
  'a',
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'footer',
  'nav',
  'button',
  'ul',
  'ol',
  'li',
  'table',
  'form',
  'input',
  'label',
]);
const CHROME_CLASSES = new Set(['container', 'button', 'navbar', 'footer', 'row', 'col', 'hero', 'menu']);

export async function scopeGeneratedCss(css) {
  const result = await postcss([createScopePlugin()]).process(css, {from: undefined});
  return result.css;
}

export function findUnscopedChromeSelectors(css) {
  return collectUnscopedSelectors(css, isUnsafeSelector);
}

export function findUnscopedRuleSelectors(css) {
  return collectUnscopedSelectors(css, (selector) => !hasScopeId(selector));
}

export function createScopePlugin() {
  return {
    postcssPlugin: 'axiowl-scope-docusaurus',
    Once(root) {
      root.walkRules((rule) => {
        if (isKeyframesRule(rule) || !rule.selector) {
          return;
        }
        rule.selector = selectorParser((selectors) => {
          selectors.each((selector) => transformSelector(selector));
        }).processSync(rule.selector);
      });
    },
  };
}
createScopePlugin.postcss = true;

function transformSelector(selector) {
  if (hasScopeId(selector)) {
    return;
  }

  const firstCompound = [];
  for (const node of selector.nodes) {
    if (node.type === 'combinator') {
      break;
    }
    firstCompound.push(node);
  }

  if (firstCompound.some(isDocumentNode)) {
    for (const node of firstCompound.filter(isDocumentNode)) {
      node.remove();
    }
    while (selector.first?.type === 'combinator') {
      const combinator = selector.first;
      const next = combinator.next();
      if (next && isDocumentNode(next)) {
        combinator.remove();
        next.remove();
        continue;
      }
      break;
    }
    selector.prepend(selectorParser.id({value: SCOPE_ID}));
    return;
  }

  if (firstCompound.length > 0 && firstCompound.every((node) => node.type === 'attribute')) {
    selector.prepend(selectorParser.id({value: SCOPE_ID}));
    return;
  }

  selector.prepend(selectorParser.combinator({value: ' '}));
  selector.prepend(selectorParser.id({value: SCOPE_ID}));
}

function collectUnscopedSelectors(css, predicate) {
  const found = [];
  const root = postcss.parse(css);
  root.walkRules((rule) => {
    if (isKeyframesRule(rule) || !rule.selector) {
      return;
    }
    selectorParser((selectors) => {
      selectors.each((selector) => {
        if (predicate(selector)) {
          found.push(selector.toString().trim());
        }
      });
    }).processSync(rule.selector);
  });
  return found;
}

function isUnsafeSelector(selector) {
  if (hasScopeId(selector)) {
    return false;
  }

  let unsafe = false;
  selector.walkTags((tag) => {
    if (CHROME_TAGS.has(tag.value.toLowerCase())) {
      unsafe = true;
    }
  });
  selector.walkUniversals(() => {
    unsafe = true;
  });
  selector.walkPseudos((pseudo) => {
    if (pseudo.value === ':root') {
      unsafe = true;
    }
  });
  selector.walkClasses((cls) => {
    if (CHROME_CLASSES.has(cls.value)) {
      unsafe = true;
    }
  });
  return unsafe;
}

function hasScopeId(selector) {
  let scoped = false;
  selector.walkIds((id) => {
    if (id.value === SCOPE_ID) {
      scoped = true;
    }
  });
  return scoped;
}

function isDocumentNode(node) {
  return (
    (node.type === 'tag' && DOCUMENT_TAGS.has(node.value.toLowerCase())) ||
    (node.type === 'pseudo' && node.value === ':root')
  );
}

function isKeyframesRule(rule) {
  let parent = rule.parent;
  while (parent) {
    if (parent.type === 'atrule' && /keyframes$/i.test(parent.name)) {
      return true;
    }
    parent = parent.parent;
  }
  return false;
}
