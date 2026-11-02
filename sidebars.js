// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'what-is-axiowl',
    'product-guide',
    'use-cases',
    {
      type: 'category',
      label: 'AxiOwl Messaging',
      link: {type: 'doc', id: 'messaging/README'},
      items: [
        {type: 'category', label: 'Understand Messaging', items: [
          'messaging/who-its-for', 'messaging/how-it-works', 'providers',
        ]},
        {type: 'category', label: 'Use Messaging', items: [
          'getting-started', 'installer', 'messaging/sending-messages',
          'messaging-workflows', 'messaging/components-and-updates',
          'messaging/mobile-and-remote', 'ssh', 'a2a',
        ]},
        {type: 'category', label: 'Develop and administer', items: [
          'messaging/integrating-agents', 'messaging/architecture',
          'messaging/technology-stack', 'messaging/security-and-privacy',
          'messaging/administration', 'messaging/faq-troubleshooting',
        ]},
        {type: 'category', label: 'Technical handbook',
          link: {type: 'doc', id: 'messaging/technical/README'},
          items: [
            'messaging/technical/feature-reference',
            {type: 'category', label: 'Architecture and stacks', items: [
              'messaging/technical/system-architecture',
              'messaging/technical/source-and-release-status',
              'messaging/technical/compatibility',
              'messaging/technical/stack-windows',
              'messaging/technical/stack-macos',
              'messaging/technical/stack-linux',
              'messaging/technical/stack-runtime',
              'messaging/technical/stack-mobile-sdk',
              'messaging/technical/stack-account-web',
              'messaging/technical/stack-release-documentation',
            ]},
            {type: 'category', label: 'Messaging and interfaces', items: [
              'messaging/technical/send-contract',
              'messaging/technical/identity-and-resolution',
              'messaging/technical/registry-and-discovery',
              'messaging/technical/conversation-management',
              'messaging/technical/protocols-and-ipc',
              'messaging/technical/interfaces-and-errors',
              'messaging/technical/activation-and-formatting',
              'messaging/technical/performance-and-reliability',
            ]},
            {type: 'category', label: 'Security, data and networking', items: [
              'messaging/technical/security-model',
              'messaging/technical/data-lifecycle',
              'messaging/technical/storage-and-file-layout',
              'messaging/technical/credential-storage',
              'messaging/technical/network-defaults',
              'messaging/technical/network-connections',
              'messaging/technical/account-and-device-discovery',
              'messaging/technical/pairing-and-revocation',
            ]},
            {type: 'category', label: 'Connections and host capabilities', items: [
              'messaging/technical/relay',
              'messaging/technical/ssh',
              'messaging/technical/a2a',
              'messaging/technical/connected-workspaces',
            ]},
            {type: 'category', label: 'Installation and operations', items: [
              'messaging/technical/provider-hot-updates',
              'messaging/technical/installation-and-removal',
              'messaging/technical/release-and-supply-chain',
              'messaging/technical/configuration',
              'messaging/technical/observability',
              'messaging/technical/operations-and-recovery',
              'messaging/technical/accessibility-and-localization',
            ]},
            {type: 'category', label: 'Provider technical references',
              link: {type: 'doc', id: 'messaging/technical/provider-integrations'},
              items: [
                'messaging/technical/providers/claude',
                'messaging/technical/providers/codex',
                'messaging/technical/providers/cursor',
                'messaging/technical/providers/opencode',
                'messaging/technical/providers/copilot',
                'messaging/technical/providers/antigravity',
              ]},
          ]},
      ],
    },
    'axiom',
    {
      type: 'category',
      label: 'AxiOwl IDE',
      link: {type: 'doc', id: 'ide/README'},
      items: [
        'ide/getting-started',
        'ide/models-and-accounts',
        'ide/sessions-and-workspaces',
        'ide/axicode',
        'ide/security-and-privacy',
      ],
    },
    {
      type: 'category',
      label: 'AxiOwl Mobile',
      link: {type: 'doc', id: 'mobile/README'},
      items: [
        'mobile/getting-started',
        'mobile/on-device-agents',
        'mobile/hosts-and-connections',
        'mobile/agents-and-workspaces',
        'mobile/security-and-privacy',
      ],
    },
    {
      type: 'category',
      label: 'AxiOwl Usage Meter',
      link: {type: 'doc', id: 'usage-meter/README'},
      items: [
        'usage-meter/getting-started',
        'usage-meter/accounts-and-readings',
        'usage-meter/cloud-costs',
        'usage-meter/phone-companions',
        'usage-meter/security-and-privacy',
      ],
    },
    {
      type: 'category',
      label: 'Across The Product Family',
      items: [
        'how-it-works',
        'platforms',
        'security',
        'troubleshooting',
        'release/update-publication-operator-guide',
        'developer',
      ],
    },
  ],
};

export default sidebars;
