const gatsbySourceMedium = require('gatsby-source-medium/gatsby-node');
const { createClient } = require('contentful');

const getAbout = (entry) => entry.sys.contentType.sys.id === 'about';

// Re-export so MediumUser/MediumPost types (including Date @dateformat) exist
// even when CI skips the live fetch and only stub nodes are created.
exports.createSchemaCustomization =
  gatsbySourceMedium.createSchemaCustomization;

const createStubMediumNodes = ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;
  const postId = createNodeId('ci-stub-medium-post');
  const userId = createNodeId('ci-stub-medium-user');

  createNode({
    id: postId,
    uniqueSlug: 'ci-stub-post',
    title: 'CI stub post',
    createdAt: '2020-01-01',
    virtuals: {
      subtitle: 'Stub Medium post used only in CI',
      readingTime: 1,
      previewImage: {
        imageId: '',
      },
    },
    parent: null,
    children: [],
    internal: {
      type: 'MediumPost',
      contentDigest: createContentDigest('ci-stub-medium-post'),
    },
  });

  // username '@medium' is the starter's "no Medium user" sentinel, so the
  // Writing section stays empty while GraphQL still has the queried fields.
  createNode({
    id: userId,
    name: 'CI',
    username: '@medium',
    posts___NODE: [postId],
    parent: null,
    children: [],
    internal: {
      type: 'MediumUser',
      contentDigest: createContentDigest('ci-stub-medium-user'),
    },
  });
};

exports.sourceNodes = async (gatsbyConfig) => {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const { items } = await client.getEntries();
  const about = items.find(getAbout);
  const { mediumUser = '@medium' } = about.fields;

  // GitHub Actions sets CI=true. Live GET medium.com/@mate.starter returns
  // Cloudflare 403 and fails the build; skip the network call in CI only.
  if (process.env.CI) {
    createStubMediumNodes(gatsbyConfig);
    return;
  }

  await gatsbySourceMedium.sourceNodes(gatsbyConfig, { username: mediumUser });
};
