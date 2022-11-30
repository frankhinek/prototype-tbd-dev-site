// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TBD',
  titleDelimiter: '|',
  tagline: 'Open Source ⁃ Decentralization ⁃ Community',
  url: 'https://developer.tbd.website',
  baseUrl: '/',
  staticDirectories: ['assets'],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/tbd_logo.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'frankhinek', // Usually your GitHub org/user name.
  projectName: 'prototype-tbdocusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // TBD Customization
  trailingSlash: false,
  scripts: [
    'https://kit.fontawesome.com/e737e32cd7.js'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   path: 'docs/home',
        //   routeBasePath: '/',
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   breadcrumbs: false,
        // },
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'events',
        path: 'content/events',
        routeBasePath: 'events',
        sidebarPath: require.resolve('./sidebarsEvents.js'),
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'discussions',
        path: 'content/discussions',
        routeBasePath: 'learn/discussions',
        sidebarPath: require.resolve('./sidebars.js'),
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ssi-service',
        path: 'docs/ssi-service',
        routeBasePath: 'learn/ssi-service',
        sidebarPath: require.resolve('./sidebars.js'),
        breadcrumbs: false,
        editUrl: 'https://github.com/frankhinek/prototype-tbdocs/tree/main/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      metadata: [
        { 'image': 'https://developer.tbd.website/img/social-share.png' },
        { 'title': 'Open Source - Decentralization - Community' },
        { 'twitter:domain': 'https://developer.tbd.website' },
        { 'twitter:url': 'https://developer.tbd.website/' },
        { 'twitter:image': 'https://developer.tbd.website/img/social-share.png' },
        { 'twitter:site': '@tbd54566975' },
        { 'name': 'twitter:card', 'content': 'summary_large_image' },
        { 'name': 'twitter:title', 'content': 'TBD | Developers' },
        { 'name': 'twitter:description', 'content': 'Focused on building decentralized platforms, protocols, and tools that empower every individual to own their data and participate in the global economy.' },
        { 'name': 'twitter:image', 'content': 'https://developer.tbd.website/img/logos/tbd_logo.png' },
      ],
      // docs: {
      //   sidebar: {
      //     hideable: false,
      //   },
      // },
      navbar: {
        logo: {
          alt: 'TBD Logo',
          src: 'img/tbd-logo.svg',
        },
        items: [
          {to: '/open-source', label: 'Open Source', position: 'left'},
          {to: '/projects', label: 'Projects', position: 'left'},
          {
            to: 'learn',
            label: 'Learn',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: 'events',
            label: 'Events',
            position: 'left',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://tbd.website',
            label: 'TBD Home',
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Block, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
