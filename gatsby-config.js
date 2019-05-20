const contentful = require('contentful');
const manifestConfig = require('./manifest-config');
require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID, YOUTUBE_ID } = process.env;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

const getAboutEntry = entry => entry.sys.contentType.sys.id === 'about';

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-manifest',
    options: manifestConfig,
  },
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: ['cabin', 'Open Sans'],
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
  'gatsby-plugin-offline',
];

const sectionsVisibility = {
  about: true,
  projects: true,
  writing: true,
  youtube: true,
};

module.exports = client.getEntries().then(entries => {
  const { youtubeUser } = entries.items.find(getAboutEntry).fields;
  const mediumUser = '';
  console.log(mediumUser);

  if (mediumUser) {
    plugins.push({
      resolve: 'gatsby-source-medium',
      options: {
        username: mediumUser || '@medium',
      },
    });
  } else {
    sectionsVisibility.writing = false;
  }

  if (youtubeUser) {
    plugins.push({
      resolve: 'gatsby-source-youtube-v2',
      options: {
        channelId: [youtubeUser || '@youtube'],
        apiKey: YOUTUBE_ID,
      },
    });
  } else {
    sectionsVisibility.youtube = false;
  }

  if (ANALYTICS_ID) {
    plugins.push({
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: ANALYTICS_ID,
      },
    });
  }

  return {
    siteMetadata: {
      isMediumUserDefined: !!mediumUser,
      isYoutubeUserDefined: !!youtubeUser,
      sectionsVisibility,
    },
    plugins,
  };
});
