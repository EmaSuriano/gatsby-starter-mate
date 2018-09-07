const spaceImport = require('contentful-import');
const inquirer = require('inquirer');
const chalk = require('chalk');
const path = require('path');
const { writeFileSync } = require('fs');

const argv = require('yargs-parser')(process.argv.slice(2));
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
    when: !argv.spaceId && !process.env.CONTENTFUL_SPACE_ID,
    validate: input =>
      /^[a-z0-9]{12}$/.test(input) ||
      'Space ID must be 12 lowercase characters',
  },
  {
    name: 'managementToken',
    when: !argv.managementToken,
    message: 'Your Content Management API access token',
  },
  {
    name: 'deliveryToken',
    when: !argv.deliveryToken && !process.env.CONTENTFUL_DELIVERY_TOKEN,
    message: 'Your Content Delivery API access token',
  },
];

inquirer
  .prompt(questions)
  .then(({ spaceId, managementToken, deliveryToken }) => {
    const { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_TOKEN } = process.env;

    // env vars are given precedence followed by args provided to the setup
    // followed by input given to prompts displayed by the setup script
    spaceId = CONTENTFUL_SPACE_ID || argv.spaceId || spaceId;
    managementToken = argv.managementToken || managementToken;
    deliveryToken =
      CONTENTFUL_DELIVERY_TOKEN || argv.deliveryToken || deliveryToken;

    console.log('Writing config file...');
    const configFilePath = path.resolve(__dirname, '..', '.contentful.json');
    writeFileSync(
      configFilePath,
      JSON.stringify(
        {
          spaceId,
          accessToken: deliveryToken,
        },
        null,
        2,
      ),
    );
    console.log(`Config file ${chalk.yellow(configFilePath)} written`);

    return { spaceId, managementToken };
  })
  .then(({ spaceId, managementToken }) =>
    spaceImport({ spaceId, managementToken, content: exportFile }),
  )
  .then((_, error) => {
    console.log(
      `All set! You can now run ${chalk.yellow(
        'npm run dev',
      )} to see it in action.`,
    );
  })
  .catch(error => console.error(error));
