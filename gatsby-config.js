const contentful = require('contentful');
const contentfulConfig = require('./.contentful.json');
const manifestConfig = require('./manifest-config');

const { accessToken, spaceId } = contentfulConfig;

console.log(spaceId, 'LALALAL', accessToken);
const client = contentful.createClient({
  space: spaceId,
  accessToken,
});

module.exports = client.getEntries().then(entries => {
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
          spaceId,
          accessToken,
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
});
