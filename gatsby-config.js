const dotenv = require('dotenv').config({
  path: `.env`,
});
const theme = require('./src/theme');
const config = require('./data-config');

const {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  ANALYTICS_TRACKING_ID,
} = dotenv.parsed;

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.name,
        short_name: config.name,
        start_url: '/',
        background_color: theme.colors.background,
        theme_color: theme.colors.primary,
        display: 'minimal-ui',
        icon: config.icon,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`cabin`, `Open Sans`],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: config.mediumUser,
      },
    },
    'gatsby-transformer-remark',
    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //     logo: './media/icon.png',
    //     appName: 'Mate Gatsby Starter',
    //     appDescription: 'Gatsby v2 starter to create a top notch portfolio!',
    //     developerName: 'EmanuelSuriano',
    //     developerURL: 'emasuriano.com',
    //     dir: 'auto',
    //     lang: 'en-US',
    //     background: '#fff',
    //     theme_color: '#fff',
    //     display: 'standalone',
    //     orientation: 'any',
    //     start_url: '/',
    //     version: '1.0',

    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: true,
    //       favicons: true,
    //       firefox: true,
    //       opengraph: true,
    //       twitter: true,
    //       yandex: true,
    //       windows: true,
    //     },
    //   },
    // },
    'gatsby-plugin-offline',
  ],
};

// ANALYTICS_TRACKING_ID
//   ? {
//       resolve: 'gatsby-plugin-google-analytics',
//       options: {
//         trackingId: ANALYTICS_TRACKING_ID,
//         head: true,
//       },
//     }
//   : undefined,
