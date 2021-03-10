#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const cssWasm = require('../index.cjs');

const [input, output] = process.argv[2].split(':');

if (!input || !output) throw new Error('Usage: css-wasm input.scss:output.css');

async function main() {
  const result = await cssWasm.parseFile(input);
  await fs.promises.writeFile(path.join(process.cwd(), output), result, 'utf8');
}
main();
