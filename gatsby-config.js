const contentful = require('contentful');
const fs = require('fs');
const toml = require('toml');
const dotenv = require('dotenv');
const manifestConfig = require('./manifest-config');

const dotenvConf = dotenv.config({
  path: `.env`,
});
console.log('.env', dotenvConf.parsed);

const config = toml.parse(fs.readFileSync('./netlify.toml', 'utf-8'));
console.log('.netlify', config);

const { ACCESS_TOKEN, SPACE_ID } = config;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
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
          spaceId: SPACE_ID,
          accessToken: ACCESS_TOKEN,
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
