// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AxiOwl',
  tagline: 'A normalization and messaging layer for AI sessions, A2A agents, and approved devices.',
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
            to: '/docs/reference/current-product-status',
            label: 'Status',
            position: 'left',
          },
          {
            to: '/docs/reference/provider-support-matrix',
            label: 'Providers',
            position: 'left',
          },
          {
            to: '/docs/reference/platform-support-matrix',
            label: 'Platforms',
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
                label: 'Provider Matrix',
                to: '/docs/reference/provider-support-matrix',
              },
              {
                label: 'Current Product Status',
                to: '/docs/reference/current-product-status',
              },
            ],
          },
          {
            title: 'Operations',
            items: [
              {
                label: 'Support / Forensics',
                to: '/docs/support/forensics',
              },
              {
                label: 'Updates And Publication',
                to: '/docs/release/update-publication-operator-guide',
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
                label: 'Developer Docs',
                to: '/docs/developer',
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
