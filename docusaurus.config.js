// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Teramont Docs',
  tagline: 'Documentación de Teramont Host',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.teramont.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Teramont-Host', // Usually your GitHub org/user name.
  projectName: 'TeramontDocs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Teramont-Host/TeramontDocs/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
      [
          '@docusaurus/plugin-content-blog',
          {
              id: 'tcp-updates',
              path: 'tcp-updates',
              routeBasePath: 'tcp-updates',
              editUrl: 'https://github.com/Teramont-Host/TeramontDocs/blob/main',
          },
      ],
      [
        '@docusaurus/plugin-content-blog',
        {
            id: 'tutorials',
            path: 'tutorials',
            routeBasePath: 'tutorials',
            editUrl: 'https://github.com/Teramont-Host/TeramontDocs/blob/main',
            blogSidebarCount: 5,
            blogSidebarTitle: 'Tutoriales',
        },
    ],
      // [
      //     '@docusaurus/plugin-content-blog',
      //     {
      //         id: 'test',
      //         path: 'test',
      //         routeBasePath: 'test',
      //     },
      // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Teramont Docs',
        logo: {
          alt: 'Teramont Docs',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {to: '/tutorials/inicio', label: 'Tutoriales', position: 'left'},
          {to: '/tcp-updates', label: 'Registro de cambios TCP', position: 'left'},
          {
            href: 'https://github.com/Teramont-Host/TeramontDocs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Documentación',
                to: '/docs',
              },
              {
                label: 'Tutoriales',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'Discord',
                href: 'https://teramont.net/discord',
              },
              {
                label: 'Twitter',
                href: 'https://teramont.net/twitter',
              },
              {
                label: 'Facebook',
                href: 'https://teramont.net/facebook',
              },
              {
                label: 'Instagram',
                href: 'https://teramont.net/instagram',
              },
              {
                label: 'TikTok',
                href: 'https://teramont.net/tiktok',
              },
            ],
          },
          {
            title: 'Otros',
            items: [
              {
                label: 'Registro de cambios TCP',
                to: '/tcp-updates',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Teramont-Host/TeramontDocs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Teramont Host Documentation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'P87VLE9O',
        apiKey: '765ae0e0e8fd817b26170019aad25634',
        indexName: 'teramont',
      },
    }),
};

module.exports = config;
