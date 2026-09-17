import React from 'react';
import {composeProviders} from '@docusaurus/theme-common';
import {
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  NavbarProvider,
  PluginHtmlClassNameProvider,
} from '@docusaurus/theme-common/internal';
import {DocsPreferredVersionContextProvider} from '@docusaurus/plugin-content-docs/client';
import {shouldOmitColorModeProvider} from '../../../embedded/chrome.mjs';

const EMBEDDED = process.env.AXIOWL_DOCS_EMBEDDED === '1';

const Provider = composeProviders(
  [
    shouldOmitColorModeProvider(EMBEDDED) ? null : ColorModeProvider,
    AnnouncementBarProvider,
    ScrollControllerProvider,
    DocsPreferredVersionContextProvider,
    PluginHtmlClassNameProvider,
    NavbarProvider,
  ].filter(Boolean),
);

export default function LayoutProvider({children}) {
  return <Provider>{children}</Provider>;
}
