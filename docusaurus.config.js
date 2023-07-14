const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs',
  tagline: 'Docs de Teramont',
  favicon: 'https://new-cdn.teramont.net/u/6iT048.ico',
  url: 'https://docs.teramont.net',
  baseUrl: '/',
  organizationName: 'Teramont',
  projectName: 'Teramont Docs',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog:false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Teramont Docs',
        logo: {
          alt: 'Teramont Logo',
          src: 'https://new-cdn.teramont.net/u/6iT048.ico',
        },
        items: [
          {
            href: 'https://teramont.net',
            label: 'Tienda',
            position: 'right',
          },
          {
            href: 'https://discord.gg/vFFjEgGqd8',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/teramontdotnet/TeramontDocs',
            label: 'GitHub',
            position: 'right',
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
                label: 'Introducción',
                to: '/',
              },
            ],
          },
          {
            title: 'Redes',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/vFFjEgGqd8',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/TeramontHost',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Tienda',
                href: 'https://teramont.net',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/teramontdotnet/TeramontDocs',
              },
            ],
          },
        ],
        copyright: `TeramontDocs ${new Date().getFullYear()}.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
