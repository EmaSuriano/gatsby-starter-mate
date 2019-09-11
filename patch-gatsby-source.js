// TODO: This patch is needed until this issue is solved --> https://github.com/gatsbyjs/gatsby/issues/17335
const fs = require('fs');

const FILE_PATH = './node_modules/gatsby-source-medium/gatsby-node.js';

const content = fs.readFileSync(FILE_PATH, 'utf8');
fs.writeFileSync(FILE_PATH, content.replace(/latest/g, ''), 'utf8');
