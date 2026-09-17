export function stripColorModeBootstrap(html) {
  const withoutScripts = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (block) => {
    const setsDocumentTheme =
      /document\.documentElement\.setAttribute\(\s*['"]data-theme(?:-choice)?['"]/.test(block);
    const readsThemeStorage =
      /(?:localStorage|sessionStorage)\.getItem\(\s*['"]theme/.test(block);
    return setsDocumentTheme || readsThemeStorage ? '' : block;
  });

  return withoutScripts.replace(/<html\b[^>]*>/i, (tag) =>
    tag
      .replace(/\sdata-theme(?:-choice)?=(["'])[\s\S]*?\1/gi, '')
      .replace(/\sdata-theme(?:-choice)?=(?:[^\s>]+)/gi, ''),
  );
}
