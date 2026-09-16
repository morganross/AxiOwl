export const EMBEDDED_BASE_PATH = '/docs/';

export const WORDPRESS_THEME_VARS = [
  '--ax-shell',
  '--ax-shell-2',
  '--ax-primary',
  '--ax-secondary',
  '--ax-cool',
  '--ax-accent',
  '--ax-paper',
  '--ax-page',
  '--ax-surface',
  '--ax-ink',
  '--ax-muted',
  '--ax-white',
];

export function docsContentPath(docsRouteBasePath, slug) {
  const rest = String(slug).replace(/^\//, '');
  return docsRouteBasePath === '/' ? `/${rest}` : `/docs/${rest}`;
}

export function createDocsProfile(env = {}) {
  const embedded = env.AXIOWL_DOCS_EMBEDDED === '1';
  const selfHosted = !embedded && env.AXIOWL_SELF_HOSTED === '1';
  const docsAtSiteRoot = embedded || selfHosted;

  return {
    embedded,
    selfHosted,
    url: docsAtSiteRoot ? 'https://axiowl.com' : 'https://morganross.github.io',
    baseUrl: docsAtSiteRoot ? EMBEDDED_BASE_PATH : '/AxiOwl/',
    trailingSlash: docsAtSiteRoot,
    docsRouteBasePath: docsAtSiteRoot ? '/' : 'docs',
    hideGlobalNavbar: embedded,
    hideGlobalFooter: embedded,
    omitColorModeToggle: embedded,
    useWordpressThemeVariables: embedded,
    customCss: embedded
      ? ['./src/css/custom.css', './src/css/embedded.css']
      : ['./src/css/custom.css'],
  };
}
