import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useFilteredAndTreeifiedTOC} from '@docusaurus/theme-common/internal';
import OriginalTOCItems from '@theme-original/TOCItems';
import TOCItemTree from '@theme/TOCItems/Tree';
import {shouldUseTocHighlight} from '../../embedded/chrome.mjs';

const EMBEDDED = process.env.AXIOWL_DOCS_EMBEDDED === '1';

export default function TOCItems(props) {
  if (shouldUseTocHighlight(EMBEDDED)) {
    return <OriginalTOCItems {...props} />;
  }
  return <EmbeddedTOCItems {...props} />;
}

function EmbeddedTOCItems({
  toc,
  className = 'table-of-contents table-of-contents__left-border',
  linkClassName = 'table-of-contents__link',
  linkActiveClassName: _linkActiveClassName,
  minHeadingLevel: minHeadingLevelOption,
  maxHeadingLevel: maxHeadingLevelOption,
  ...props
}) {
  const themeConfig = useThemeConfig();
  const minHeadingLevel =
    minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
  const maxHeadingLevel =
    maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;
  const tocTree = useFilteredAndTreeifiedTOC({
    toc,
    minHeadingLevel,
    maxHeadingLevel,
  });
  return (
    <TOCItemTree
      toc={tocTree}
      className={className}
      linkClassName={linkClassName}
      {...props}
    />
  );
}
