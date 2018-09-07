const dotenv = require('dotenv').config({
  path: `.env`,
});
const theme = require('./src/theme');
const config = require('./data-config');

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
        spaceId: dotenv.parsed.CONTENTFUL_SPACE_ID,
        accessToken: dotenv.parsed.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: config.mediumUser,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: dotenv.parsed.ANALYTICS_TRACKING_ID,
        head: true,
      },
    },
    'gatsby-plugin-offline',
  ],
};
