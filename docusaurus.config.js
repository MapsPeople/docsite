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
    plugins: [
      [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        {
          // whether to index docs pages
          indexDocs: true,

          // Whether to also index the titles of the parent categories in the sidebar of a doc page.
          // 0 disables this feature.
          // 1 indexes the direct parent category in the sidebar of a doc page
          // 2 indexes up to two nested parent categories of a doc page
          // 3...
          //
          // Do _not_ use Infinity, the value must be a JSON-serializable integer.
          indexDocSidebarParentCategories: 3,

          // whether to index blog pages
          indexBlog: false,

          // whether to index static pages
          // /404.html is never indexed
          indexPages: false,
        },
      ],
    ],
};

module.exports = config;