const dotenv = require('dotenv').config({
  path: `.env`,
});
const contentful = require('contentful');
const manifestConfig = require('./manifest-config');

const {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  ANALYTICS_TRACKING_ID,
} = dotenv.parsed;

const client = contentful.createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

module.exports = client
  .getEntries('about')
  .then(entries => {
    const aboutEntry = entries.items.find(
      entry => entry.sys.contentType.sys.id === 'about',
    );

    const about = aboutEntry.fields;

    return {
      plugins: [
        'gatsby-plugin-react-helmet',
        {
          resolve: 'gatsby-plugin-manifest',
          options: manifestConfig,
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
            username: about.mediumUser,
          },
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-offline',
      ],
    };
  })
  .catch(console.error);

// ANALYTICS_TRACKING_ID
//   ? {
//       resolve: 'gatsby-plugin-google-analytics',
//       options: {
//         trackingId: ANALYTICS_TRACKING_ID,
//         head: true,
//       },
//     }
//   : undefined,
