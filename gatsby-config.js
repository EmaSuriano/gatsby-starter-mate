const contentful = require('contentful');
const manifestConfig = require('./manifest-config');
require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID } = process.env;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

const getAboutContentType = entry => entry.sys.contentType.sys.id === 'about';

module.exports = client.getEntries().then(entries => {
  const aboutEntry = entries.items.find(getAboutContentType);

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

  // const { mediumUser } = aboutEntry.fields;
  // if (mediumUser) {
  plugins.push({
    resolve: 'gatsby-source-medium',
    options: {
      username: aboutEntry.fields.mediumUser || '@medium',
    },
  });
  // }

  return {
    plugins,
  };
});
