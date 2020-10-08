const about = require('./about.json');

require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID, DETERMINISTIC } = process.env;

// TODO: move to Theme configuration
const config = {
  writingLimit: 3,
};

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-typescript',
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `${about.name} Portfolio`,
      short_name: about.name,
      start_url: '/',
      background_color: about.colors.background,
      theme_color: about.colors.primary,
      display: 'minimal-ui',
      icon: 'media/icon.png',
    },
  },
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    },
  },
  'gatsby-transformer-remark',
  {
    resolve: 'gatsby-source-medium',
    options: {
      username: about.mediumUser || '@medium',
    },
  },
];

if (ANALYTICS_ID) {
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: ANALYTICS_ID,
    },
  });
}

module.exports = {
  plugins,
  siteMetadata: {
    isMediumUserDefined: !!about.mediumUser,
    deterministic: !!DETERMINISTIC,
    ...config,
  },
};
