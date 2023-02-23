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
  onBrokenLinks: 'warn',
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
      docs: {
        sidebar: {
          /* autoCollapseCategories: true, */
        },
      },
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
            to: 'https://github.com/mapspeople',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: 'https://mapspeople.com/support',
            label: 'Support Center',
            position: 'right',
          },
          {
            to: 'https://blog.mapspeople.com/tag/product',
            label: 'Product Blog',
            position: 'right',
          },
          {
            to: 'https://cms.mapsindoors.com/',
            label: 'CMS Login',
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
                to: '/cms/',
              },
              {
                label: 'Map',
                to: '/display-rules/',
              },
              {
                label: 'Directions',
                to: '/directions-intro/',
              },
            ],
          },
          {
            title: 'Documentation',
            items: [
              {
                label: 'Searching',
                to: '/searching/',
              },
              {
                label: 'Working with Data',
                to: '/booking/',
              },
              {
                label: 'Other Guides',
                to: '/glossary',
              },
              {
                label: 'Changelogs',
                to: '/changelogs/android/',
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
          {
            title: 'Do you need help?',
            items: [
              {
                label: 'Support Center',
                href: 'https://mapspeople.com/support',
              },
              {
                label: "Or if that doesn't work... Contact us!",
                href: "https://www.mapspeople.com/contact",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MapsPeople A/S`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['json', 'java', 'kotlin', 'objectivec', 'swift', 'javascript', 'python', 'dart'],
      },
    }),
    plugins: [require.resolve('docusaurus-lunr-search')],
};

module.exports = config;