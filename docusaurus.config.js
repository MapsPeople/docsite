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
  organizationName: 'MapsPeople', // Usually your GitHub org/user name.
  projectName: 'docsite', // Usually your repo name.

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
        title: 'MapsIndoors Docs',
        logo: {
          alt: 'MapsPeople Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Reference Docs',
            position: 'right',
            items: [
              {
                label: 'Android SDK',
                href: '/reference-docs/android',
              },
              {
                label: 'iOS SDK',
                href: '/reference-docs/ios',
              },
              {
                label: 'Web SDK',
                href: '/reference-docs/web',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Changelogs',
            position: 'right',
            items: [
              {
                label: 'Android SDK',
                href: '/changelogs/android',
              },
              {
                label: 'iOS SDK',
                href: '/changelogs/ios',
              },
              {
                label: 'Web SDK',
                href: '/changelogs/web',
              },
              {
                label: 'MI Components',
                href: '/changelogs/components',
              },
            ],
          },
          {
            href: 'https://mapspeople.com/support',
            label: 'Support',
            position: 'right',
          },
          {
            href: 'https://cms.mapsindoors.com/',
            label: 'CMS Login',
            position: 'right',
          },
          {
            href: 'https://docs-legacy.mapsindoors.com/content/legacy/',
            label: 'Legacy Docs',
            position: 'right',
          },
          {
            href: 'https://github.com/MapsPeople/',
            'aria-label': 'GitHub',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Product Blog',
                href: 'https://blog.mapspeople.com/tag/product'
              },
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
    plugins: [
      [
        '@docusaurus/plugin-google-gtag',
        {
          trackingID: 'G-JY8SV01TXT',
          anonymizeIP: true,
        },
      ],
        require.resolve('docusaurus-lunr-search')
    ],
};

module.exports = config;