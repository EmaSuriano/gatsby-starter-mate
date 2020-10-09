import { createClient, Entry } from 'contentful';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import assert from 'assert';
import theme from '../theme';

dotenv.config();

const { ACCESS_TOKEN, SPACE_ID } = process.env;
const ABOUT_PATH = path.join(process.cwd(), 'about.json');

assert(ACCESS_TOKEN, 'No ACCESS_TOKEN provided inside env variables ...');
assert(SPACE_ID, 'No SPACE_ID provided inside env variables ...');

const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

type EntryType = Record<string, string>;

const getAboutEntry = (entry: Entry<EntryType>) =>
  entry.sys.contentType.sys.id === 'about';

const main = async () => {
  const { items } = await client.getEntries<EntryType>();

  const aboutEntry = items.find(getAboutEntry);
  if (!aboutEntry) throw new Error("Can't find entry content type ...");

  fs.writeFileSync(
    ABOUT_PATH,
    JSON.stringify({ ...aboutEntry.fields, colors: theme.colors }, null, 2),
  );
};

main();
