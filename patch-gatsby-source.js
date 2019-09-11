const fs = require('fs');

const FILE_PATH = './node_modules/gatsby-source-medium/gatsby-node.js';

const content = fs.readFileSync(FILE_PATH, 'utf8');
fs.writeFileSync(FILE_PATH, content.replace(/latest/g, ''), 'utf8');
