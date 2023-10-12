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
      label: 'Comenzar',
      items: [
        'getting_started/overview'
    ],
    },
    {
      type: 'category',
      label: 'Teramont Control Panel (TCP)',
      items: [
        'getting_started/overview'
    ],
    },
    {
      type: 'category',
      label: 'Servidores de Minecraft',
      items: [
        'getting_started/overview'
    ],
    },
    {
      type: 'category',
      label: 'VPS Hositng',
      items: [
        'getting_started/overview'
    ],
    },
    {
      type: 'category',
      label: 'Servidores Dedicados',
      items: [
        'getting_started/overview'
    ],
    },
  ],
  
};

module.exports = sidebars;
