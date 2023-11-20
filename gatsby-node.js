const gatsbySourceMedium = require('gatsby-source-medium/gatsby-node');
const { createClient } = require('contentful');

const getAbout = (entry) => entry.sys.contentType.sys.id === 'about';

exports.sourceNodes = async (gatsbyConfig, themeOptions) => {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const { items } = await client.getEntries();
  const about = items.find(getAbout);
  const { mediumUser = '@medium' } = about.fields;

  await gatsbySourceMedium.sourceNodes(gatsbyConfig, { username: mediumUser });
};
