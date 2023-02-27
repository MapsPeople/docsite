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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'autogenerated', dirName: '.'
    },
      {
      type: 'html',
      value: '<br> <b>Reference Docs</b>', // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    {
      type: 'link',
      label: 'Android SDK v3', // The link label
      href: 'https://app.mapsindoors.com/mapsindoors/reference/android/v3/index.html', // The external URL
    },
        {
      type: 'link',
      label: 'Android SDK v4', // The link label
      href: 'https://app.mapsindoors.com/mapsindoors/reference/android/v4/index.html', // The external URL
    },
        {
      type: 'link',
      label: 'iOS SDK v3', // The link label
      href: 'https://app.mapsindoors.com/mapsindoors/reference/ios/v3/classes.html', // The external URL
    },
        {
      type: 'link',
      label: 'Javascript SDK v3', // The link label
      href: 'https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/index.html', // The external URL
    },
    {
      type: 'html',
      value: '<br>', // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
