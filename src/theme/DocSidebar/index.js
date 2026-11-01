import React, {useState} from 'react';
import {useWindowSize} from '@docusaurus/theme-common';
import DocSidebarDesktop from '@theme/DocSidebar/Desktop';
import DocSidebarMobile from '@theme/DocSidebar/Mobile';
import {chooseDocsSidebarSurface} from '../../embedded/chrome.mjs';
import DocsSearch from '../../components/DocsSearch';

const EMBEDDED = process.env.AXIOWL_DOCS_EMBEDDED === '1';

export default function DocSidebar(props) {
  const windowSize = useWindowSize();
  const surface = chooseDocsSidebarSurface(EMBEDDED, windowSize);
  const [expanded, setExpanded] = useState(false);

  if (surface === 'in-flow-desktop') {
    return <div className="axiowl-docs-navigation">
      <DocsSearch />
      <button type="button" className="axiowl-docs-browse" aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}>Browse documentation <span aria-hidden="true">{expanded ? '\u25b4' : '\u25be'}</span></button>
      <div className="axiowl-docs-navigation-tree" data-expanded={expanded}
        onClick={(event) => { if (event.target.closest('a')) setExpanded(false); }}>
        <DocSidebarDesktop {...props} />
      </div>
    </div>;
  }
  if (surface === 'desktop') {
    return <DocSidebarDesktop {...props} />;
  }
  if (surface === 'mobile-drawer') {
    return <DocSidebarMobile {...props} />;
  }
  return null;
}
