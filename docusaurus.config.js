// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AxiOwl',
  tagline: 'Documentation for installing, connecting, and operating AxiOwl across providers and nodes.',
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
            to: '/docs/reference/provider-support-matrix',
            label: 'Providers',
            position: 'left',
          },
          {
            to: '/docs/reference/installer-behavior-matrix',
            label: 'Installer',
            position: 'left',
          },
          {
            to: '/docs/reference/release-validation-checklist',
            label: 'Release QA',
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
                label: 'Installer Matrix',
                to: '/docs/reference/installer-behavior-matrix',
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
                label: 'Release QA',
                to: '/docs/release/qa-checklist',
              },
              {
                label: 'Security / Trust',
                to: '/docs/security/trust-boundaries',
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
