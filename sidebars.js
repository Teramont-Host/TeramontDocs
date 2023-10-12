/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Sidebar para la documentación
  docsSidebar: [
    {
      type: 'category',
      label: 'Guía de Inicio',
      collapsed: false,
      items: [
        'getting_started/overview'
    ],
    },
    {
      type: 'category',
      label: 'Teramont Control Panel (TCP)',
      collapsed: true,
      items: [
        'tcp/basic'
    ],
    },
    {
      type: 'category',
      label: 'Servidores de Minecraft',
      collapsed: true,
      items: [
        'minecraft_servers/aikars_flags'
    ],
    },
    {
      type: 'category',
      label: 'VPS Hositng',
      collapsed: true,
      items: [
        'getting_started/overview'
    ],
    },
    {
      type: 'category',
      label: 'Servidores Dedicados',
      collapsed: true,
      items: [
        'getting_started/overview'
    ],
    },
    {
      type: 'category',
      label: 'Facturación',
      collapsed: true,
      items: [
        'getting_started/overview'
    ],
    },
    {
      type: 'category',
      label: 'Extras',
      collapsed: true,
      items: [
        'extras/swap'
    ],
    },
  ],
  
};

module.exports = sidebars;
