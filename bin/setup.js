const spaceImport = require('contentful-import');
const inquirer = require('inquirer');
const chalk = require('chalk');
const path = require('path');
const { writeFileSync } = require('fs');
const envfile = require('envfile');

const exportFile = require('./contentful-config.json');

console.log(`
  To set up this project you need to provide your Space ID
  and the belonging API access tokens.
  You can find all the needed information in your Contentful space under:
  ${chalk.yellow(
    `app.contentful.com ${chalk.red('->')} Space Settings ${chalk.red(
      '->',
    )} API keys`,
  )}
  The ${chalk.green('Content Management API Token')}
    will be used to import and write data to your space.
  The ${chalk.green('Content Delivery API Token')}
    will be used to ship published production-ready content in your Gatsby app.
  The ${chalk.green('Content Preview API Token')}
    will be used to show not published data in your development environment.
  Ready? Let's do it! 🎉
`);

const questions = [
  {
    name: 'spaceId',
    message: 'Your Space ID',
    validate: input =>
      /^[a-z0-9]{12}$/.test(input) ||
      'Space ID must be 12 lowercase characters',
  },
  {
    name: 'deliveryToken',
    message: 'Your Content Delivery API access token',
  },
  {
    name: 'managementToken',
    message: 'Your Content Management API access token',
  },
];

inquirer
  .prompt(questions)
  .then(({ spaceId, deliveryToken, managementToken }) => {
    console.log('Writing config file...');

    const configFilePath = path.resolve(__dirname, '..', '.env');
    const envData = envfile.stringifySync({
      SPACE_ID: spaceId,
      ACCESS_TOKEN: deliveryToken,
    });

    writeFileSync(configFilePath, envData);
    console.log(`Config file ${chalk.yellow(configFilePath)} written`);

    return { spaceId, managementToken };
  })
  .then(({ spaceId, managementToken }) =>
    spaceImport({ spaceId, managementToken, content: exportFile }),
  )
  .then(() => {
    console.log(
      `All set! You can now run ${chalk.yellow(
        'yarn develop',
      )} to see it in action.`,
    );
  })
  .catch(error => console.error(error));
