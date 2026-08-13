// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AxiOwl',
  tagline: 'Bring your AI tools together. Delegate work, share results, and coordinate securely across providers and devices.',
  favicon: 'img/axiowl-owl-head.png',

  future: {
    v4: true,
  },

  url: 'https://morganross.github.io',
  baseUrl: '/AxiOwl/',
  organizationName: 'morganross',
  projectName: 'AxiOwl',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/morganross/AxiOwl/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/axiowl-hero-owl.webp',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'AxiOwl',
        logo: {
          alt: 'AxiOwl mascot',
          src: 'img/axiowl-owl-head.png',
          href: 'https://axiowl.com/',
          target: '_self',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/docs/use-cases',
            label: 'Use Cases',
            position: 'left',
          },
          {
            to: '/docs/how-it-works',
            label: 'How It Works',
            position: 'left',
          },
          {
            to: '/docs/providers',
            label: 'Providers',
            position: 'left',
          },
          {
            to: '/docs/security',
            label: 'Security',
            position: 'left',
          },
          {
            href: 'https://github.com/morganross/AxiOwl',
            label: 'GitHub',
            position: 'right',
            className: 'navbar__github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Start Here',
                to: '/docs/intro',
              },
              {
                label: 'Use Cases',
                to: '/docs/use-cases',
              },
              {
                label: 'Getting Started',
                to: '/docs/getting-started/install-first-run',
              },
            ],
          },
          {
            title: 'Explore',
            items: [
              {
                label: 'How It Works',
                to: '/docs/how-it-works',
              },
              {
                label: 'Provider Surfaces',
                to: '/docs/providers',
              },
              {
                label: 'Security And Trust',
                to: '/docs/security',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'AxiOwl.com',
                href: 'https://axiowl.com/',
              },
              {
                label: 'A2A Agents',
                to: '/docs/a2a',
              },
              {
                label: 'Secure Devices',
                to: '/docs/xmpp',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/morganross/AxiOwl',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} AxiOwl. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
