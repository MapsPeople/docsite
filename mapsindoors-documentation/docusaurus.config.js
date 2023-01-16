// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MapsIndoors Documentation',
  tagline: 'We build maps, so you don\'t have to',
  url: 'https://docs.mapsindoors.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/MapsPeople_RGB_Bomærke_Petrol.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        /*below line disables ability to switch to dark mode*/
        disableSwitch: true,
      },
      navbar: {
        title: ' ',
        logo: {
          alt: 'MapsPeople Logo',
          src: 'img/MapsPeople_RGB_Logotype_White.png',
        },
        items: [
          {
            href: 'https://github.com/mapspeople',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://mapspeople.com/support',
            label: 'Support Center',
            position: 'right',
          },
          {
            href: 'https://blog.mapspeople.com/tag/product',
            label: 'Product Blog',
            position: 'right',
          },
          {
            href: 'https://cms.mapsindoors.com/',
            label: 'MapsIndoors CMS',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started',
              },
              {
                label: 'MapsIndoors CMS',
                to: '/cms',
              },
              {
                label: 'Map',
                to: '/Map',
              },
              {
                label: 'Directions',
                to: '/directions',
              },
              {
                label: 'Searching',
                to: '/searching',
              },
              {
                label: 'Working with Data',
                to: '/data',
              },
              {
                label: 'Integration API',
                to: '/api',
              },
              {
                label: 'Various',
                to: '/various',
              },
            ],
          },
          {
            title: 'Product',
            items: [
              {
                label: 'Product Overview',
                href: '/product/',
              },
              {
                label: 'Requirements',
                href: '/product/platform-requirements/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MapsPeople A/S. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['json', 'java', 'kotlin', 'objectivec', 'swift', 'javascript', 'python', 'dart'],
      },
    }),
};

module.exports = config;