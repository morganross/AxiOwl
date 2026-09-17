import React from 'react';
import {useWindowSize} from '@docusaurus/theme-common';
import DocSidebarDesktop from '@theme/DocSidebar/Desktop';
import DocSidebarMobile from '@theme/DocSidebar/Mobile';
import {chooseDocsSidebarSurface} from '../../embedded/chrome.mjs';

const EMBEDDED = process.env.AXIOWL_DOCS_EMBEDDED === '1';

export default function DocSidebar(props) {
  const windowSize = useWindowSize();
  const surface = chooseDocsSidebarSurface(EMBEDDED, windowSize);

  if (surface === 'in-flow-desktop' || surface === 'desktop') {
    return <DocSidebarDesktop {...props} />;
  }
  if (surface === 'mobile-drawer') {
    return <DocSidebarMobile {...props} />;
  }
  return null;
}
