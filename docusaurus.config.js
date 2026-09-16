// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';
import {createDocsProfile} from './src/embedded/profile.mjs';
import axiowlEmbeddedPlugin from './src/embedded/plugin.mjs';

const profile = createDocsProfile(process.env);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AxiOwl',
  tagline: 'Bring your desktop AI agents to every screen. Pair a phone, open a real session, and keep the work moving.',
  favicon: 'img/axiowl-owl-head.png',

  future: {
    v4: true,
  },

  url: profile.url,
  baseUrl: profile.baseUrl,
  organizationName: 'morganross',
  projectName: 'AxiOwl',
  trailingSlash: profile.trailingSlash,
  customFields: {
    axiowlDocsEmbedded: profile.embedded,
    docsRouteBasePath: profile.docsRouteBasePath,
  },
  plugins: [axiowlEmbeddedPlugin],

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
          routeBasePath: profile.docsRouteBasePath,
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/morganross/AxiOwl/tree/main/',
        },
        blog: false,
        theme: {
          customCss: profile.customCss,
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
        disableSwitch: profile.omitColorModeToggle,
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
            href: 'https://axiowl.com/pricing/',
            target: '_self',
            label: 'Pricing',
            position: 'left',
          },
          {
            href: 'https://axiowl.com/enterprise-solutions/',
            target: '_self',
            label: 'Enterprise',
            position: 'left',
          },
          {
            to: '/',
            label: 'Docs',
            position: 'left',
          },
          {
            href: 'https://axiowl.com/contact/',
            target: '_self',
            label: 'Contact',
            position: 'left',
          },
          {
            label: 'Products',
            position: 'left',
            items: [
              {label: 'AxiOwl IDE', href: 'https://axiowl.com/axiowl-ide/', target: '_self'},
              {label: 'Downloads', href: 'https://axiowl.com/downloads/', target: '_self'},
              {label: 'AxiOwl', href: 'https://axiowl.com/axiowl-desktop/', target: '_self'},
              {label: 'AxiOwl Messaging', href: 'https://axiowl.com/axiowl-messaging/', target: '_self'},
              {label: 'AxiOwl Cloud Cost Meter', href: 'https://axiowl.com/axiowl-cloud-cost-meter/', target: '_self'},
              {label: 'AxiOwl Mobile', href: 'https://axiowl.com/axiowl-mobile-apps/', target: '_self'},
              {label: 'AxiOwl Usage Meter', href: 'https://axiowl.com/axiowl-usage-quota-limit-meter/', target: '_self'},
            ],
          },
          {
            label: 'Company',
            position: 'left',
            items: [
              {label: 'Blog', href: 'https://axiowl.com/blog/', target: '_self'},
              {label: 'Accessibility', href: 'https://axiowl.com/accessibility/', target: '_self'},
              {label: 'Terms and Conditions', href: 'https://axiowl.com/terms-and-conditions/', target: '_self'},
              {label: 'Privacy Policy', href: 'https://axiowl.com/privacy-policy/', target: '_self'},
              {label: 'Affiliate Partner Signup', href: 'https://axiowl.com/affiliate-partner-signup/', target: '_self'},
              {label: 'Downloads', href: 'https://axiowl.com/downloads/', target: '_self'},
            ],
          },
          {
            href: 'https://axiowl.com/login/',
            target: '_self',
            label: 'Log In',
            position: 'left',
          },
          {
            href: 'https://objectstorage.us-sanjose-1.oraclecloud.com/n/ax0jy7uvkwdy/b/axiowl-update-channel-prod/o/stable%2Fwindows%2FAxiOwl.msi',
            target: '_self',
            label: 'Download',
            position: 'right',
            className: 'navbar__download-link',
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
                to: '/docs/getting-started',
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
                label: 'AxiOwl Mobile',
                to: '/docs/mobile',
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
