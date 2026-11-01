import {readdir, readFile, writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {stripColorModeBootstrap} from './color-mode.mjs';
import {EMBEDDED_MANIFEST_FILENAME, readSourceCommit, writeEmbeddedManifest} from './manifest.mjs';
import {scopeGeneratedCss} from './scope-css.mjs';

const COLOR_MODE_STUB = fileURLToPath(new URL('./color-mode-stub.js', import.meta.url));

export default function axiowlEmbeddedPlugin({siteDir}) {
  const embedded = process.env.AXIOWL_DOCS_EMBEDDED === '1';
  let searchRecords = [];

  return {
    name: 'axiowl-embedded-docs',
    async allContentLoaded({allContent}) {
      const versions = allContent['docusaurus-plugin-content-docs'].default.loadedVersions;
      const docs = versions.flatMap((version) => version.docs)
        .filter((doc) => !doc.unlisted && !doc.draft);
      searchRecords = await Promise.all(docs.map(async ({title, description, permalink, source}) => ({
        title, description, url: `${permalink.replace(/\/$/, '')}/`,
        body: await readFile(join(siteDir, source.slice('@site/'.length)), 'utf8'),
      })));
      searchRecords.sort((left, right) => left.title.localeCompare(right.title));
    },
    configureWebpack(_config, _isServer, {currentBundler}) {
      return {
        plugins: [
          new currentBundler.instance.DefinePlugin({
            'process.env.AXIOWL_DOCS_EMBEDDED': JSON.stringify(embedded ? '1' : ''),
            'process.env.AXIOWL_DOCS_SOURCE_COMMIT': JSON.stringify(readSourceCommit()),
          }),
          ...(embedded ? [createColorModeReplacementPlugin()] : []),
        ],
      };
    },
    async postBuild({outDir, siteConfig}) {
      if (siteConfig.customFields?.axiowlDocsEmbedded !== true) {
        return;
      }

      const htmlFiles = await listHtmlFiles(outDir);
      const builtAt = new Date().toISOString();
      const sourceCommit = readSourceCommit();
      await writeFile(join(outDir, 'search-index.json'), `${JSON.stringify(searchRecords)}\n`);
      const image = new URL(`${siteConfig.baseUrl}${siteConfig.themeConfig.image}`, siteConfig.url).href;
      const metadata = Object.fromEntries(searchRecords.map((record) => [
        record.url.slice(siteConfig.baseUrl.length).replace(/\/$/, ''),
        {title: `${record.title} | ${siteConfig.title}`, description: record.description,
          canonical: new URL(record.url, siteConfig.url).href, image},
      ]));
      metadata[''] = {title: `Documentation | ${siteConfig.title}`, description: siteConfig.tagline,
        canonical: new URL(siteConfig.baseUrl, siteConfig.url).href, image};
      await writeFile(join(outDir, 'route-metadata.json'), `${JSON.stringify(metadata)}\n`);
      await writeEmbeddedManifest({
        outDir,
        htmlFiles,
        basePath: siteConfig.baseUrl,
        sourceCommit,
        builtAt,
        buildId: `${sourceCommit}-${builtAt.replace(/\.\d+Z$/, 'Z').replace(/[-:]/g, '')}`,
      });

      const manifest = JSON.parse(await readFile(join(outDir, EMBEDDED_MANIFEST_FILENAME), 'utf8'));
      const cssFiles = await listCssFiles(outDir, manifest.styles);
      for (const file of cssFiles) {
        const css = await readFile(file, 'utf8');
        await writeFile(file, await scopeGeneratedCss(css));
      }
      for (const htmlFile of htmlFiles) {
        const html = await readFile(htmlFile, 'utf8');
        await writeFile(htmlFile, stripColorModeBootstrap(html));
      }
    },
  };
}

async function listCssFiles(outDir, manifestStyles = []) {
  const entries = await readdir(outDir, {recursive: true});
  const files = new Set(
    entries
      .filter((entry) => entry.endsWith('.css'))
      .map((entry) => join(outDir, entry)),
  );
  for (const style of manifestStyles) {
    files.add(join(outDir, style.replace(/^\/docs\//, '')));
  }
  return [...files];
}

async function listHtmlFiles(outDir) {
  const entries = await readdir(outDir, {recursive: true});
  const files = entries
    .filter((entry) => entry.endsWith('.html'))
    .map((entry) => join(outDir, entry));
  files.sort((left, right) => {
    const leftHome = left === join(outDir, 'index.html');
    const rightHome = right === join(outDir, 'index.html');
    if (leftHome !== rightHome) {
      return leftHome ? -1 : 1;
    }
    return left.localeCompare(right);
  });
  return files;
}

function createColorModeReplacementPlugin() {
  return {
    name: 'axiowl-color-mode-stub',
    apply(compiler) {
      compiler.hooks.normalModuleFactory.tap('axiowl-color-mode-stub', (factory) => {
        factory.hooks.beforeResolve.tap('axiowl-color-mode-stub', (data) => {
          if (!data) {
            return;
          }
          const context = String(data.context ?? '').replace(/\\/g, '/');
          const request = String(data.request ?? '').replace(/\\/g, '/');
          if (context.includes('/theme-common/lib') && /contexts\/colorMode/.test(request)) {
            data.request = COLOR_MODE_STUB;
          }
        });
      });
    },
  };
}
