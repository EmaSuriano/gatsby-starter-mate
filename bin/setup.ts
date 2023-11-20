import spaceImport from 'contentful-import';
import { prompt } from 'enquirer';
import chalk from 'chalk';
import os from 'os';
import path from 'path';
import { writeFileSync, readFileSync } from 'fs';

const ROOT_PATH = path.resolve();
const CONFIG_FILE_PATH = path.resolve(ROOT_PATH, '.env');
const CONFIG_PATH = path.resolve(ROOT_PATH, 'bin', 'contentful-config.json');

const MESSAGES = {
  welcome: `
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
  `,
  env: 'Writing config file...',
  importing: 'Importing content into your Contentful ...',
  done: `
    All set! You can now run:
      ${chalk.yellow('yarn start')}
    
    to see it in action.`,
};

const PROMPTS = {
  spaceId: {
    type: 'input',
    name: 'spaceId',
    message: 'Your Space ID',
  },
  deliveryToken: {
    type: 'password',
    name: 'deliveryToken',
    message: 'Your Content Delivery API access token',
  },
  managementToken: {
    type: 'password',
    name: 'managementToken',
    message: 'Your Content Management API access token',
  },
};

type PromptResponse = Record<keyof typeof PROMPTS, string>;

export const setup = async () => {
  console.log(MESSAGES.welcome);

  const { spaceId, deliveryToken, managementToken } =
    await prompt<PromptResponse>(Object.values(PROMPTS));

  console.log(MESSAGES.env);
  const envData = [`SPACE_ID=${spaceId}`, `ACCESS_TOKEN=${deliveryToken}`];
  writeFileSync(CONFIG_FILE_PATH, envData.join(os.EOL));

  console.log(MESSAGES.importing);
  const content = JSON.parse(readFileSync(CONFIG_PATH, 'utf-8'));
  await spaceImport({ spaceId, managementToken, content });

  console.log(MESSAGES.done);
};

setup();
