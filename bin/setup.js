const spaceImport = require('contentful-import');
const inquirer = require('inquirer');
const chalk = require('chalk');
const os = require('os');
const path = require('path');
const { writeFileSync } = require('fs');
const exportFile = require('./contentful-config.json');

const validateSpaceId = (input) =>
  /^[a-z0-9]{12}$/.test(input) || 'Space ID must be 12 lowercase characters';

const CONFIG_FILE_PATH = path.resolve(__dirname, '..', '.env');
const QUESTIONS = [
  {
    name: 'spaceId',
    message: 'Your Space ID',
    validate: validateSpaceId,
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

const setup = async () => {
  const { spaceId, deliveryToken, managementToken } = await inquirer.prompt(
    QUESTIONS,
  );

  console.log('Writing config file...');
  const envData = [`SPACE_ID=${spaceId}`, `ACCESS_TOKEN=${deliveryToken}`];
  writeFileSync(CONFIG_FILE_PATH, envData.join(os.EOL));

  console.log('Importing content into your Contentful ...');
  await spaceImport({ spaceId, managementToken, content: exportFile });

  console.log(
    `All set! You can now run ${chalk.yellow(
      'yarn start',
    )} to see it in action.`,
  );
};

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

setup();
