// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'what-is-axiowl',
    'use-cases',
    {
      type: 'category',
      label: 'AxiOwl Messaging',
      link: {type: 'doc', id: 'getting-started'},
      items: ['messaging-workflows', 'providers', 'installer', 'a2a'],
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
