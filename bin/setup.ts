// @ts-ignore
import spaceImport from 'contentful-import';
import inquirer from 'inquirer';
import chalk from 'chalk';
import os from 'os';
import path from 'path';
import { writeFileSync, readFileSync } from 'fs';

const ROOT_PATH = path.resolve();
const CONFIG_FILE_PATH = path.resolve(ROOT_PATH, '.env');
const CONFIG_PATH = path.resolve(ROOT_PATH, 'bin', 'contentful-config.json');

const QUESTIONS = [
  {
    name: 'spaceId',
    message: 'Your Space ID',
    validate: (input: string) =>
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

const setup = async () => {
  const { spaceId, deliveryToken, managementToken } = await inquirer.prompt(
    QUESTIONS,
  );

  console.log('Writing config file...');
  const envData = [`SPACE_ID=${spaceId}`, `ACCESS_TOKEN=${deliveryToken}`];
  writeFileSync(CONFIG_FILE_PATH, envData.join(os.EOL));

  console.log('Importing content into your Contentful ...');
  const content = JSON.parse(readFileSync(CONFIG_PATH, 'utf-8'));
  await spaceImport({ spaceId, managementToken, content });

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
