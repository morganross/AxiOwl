import {readdir, readFile, writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {stripColorModeBootstrap} from './color-mode.mjs';
import {EMBEDDED_MANIFEST_FILENAME, readSourceCommit, writeEmbeddedManifest} from './manifest.mjs';
import {scopeGeneratedCss} from './scope-css.mjs';

const COLOR_MODE_STUB = fileURLToPath(new URL('./color-mode-stub.js', import.meta.url));

export default function axiowlEmbeddedPlugin() {
  const embedded = process.env.AXIOWL_DOCS_EMBEDDED === '1';

  return {
    name: 'axiowl-embedded-docs',
    configureWebpack(_config, _isServer, {currentBundler}) {
      return {
        plugins: [
          new currentBundler.instance.DefinePlugin({
            'process.env.AXIOWL_DOCS_EMBEDDED': JSON.stringify(embedded ? '1' : ''),
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
