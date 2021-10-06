// Fix to use process attr https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#process-is-not-defined

exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
  if (stage === 'build-javascript' || stage === 'develop') {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: 'process/browser' })],
    });
  }
};
