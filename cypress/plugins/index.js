const { renameSync } = require('fs');
const percyHealthCheck = require('@percy/cypress/task');

module.exports = (on, config) => {
  on('task', percyHealthCheck);

  on('after:screenshot', ({ path }) => {
    renameSync(path, path.replace(/ \(\d*\)/i, ''));
  });

  return config;
};
