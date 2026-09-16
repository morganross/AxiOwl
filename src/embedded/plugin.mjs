import {readdir} from 'node:fs/promises';
import {join} from 'node:path';
import {readSourceCommit, writeEmbeddedManifest} from './manifest.mjs';

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
    },
  };
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
