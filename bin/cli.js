#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');
const cssWasm = require('../index.cjs');

const [input, output] = process.argv[2].split(':').map((item) => item.trim());

if (!input || !output) {
  console.error('Usage: css-wasm input.scss:output.css');
  process.exit(1);
}

function main() {
  console.log(`🧃 ${input} → ${output}`);
  const i = path.join(process.cwd(), input);
  const o = path.join(process.cwd(), output);

  if (!fs.existsSync(i)) {
    console.error(`⚠️  File not found: ${input}`);
    process.exit(1);
  }

  const start = performance.now();
  const result = cssWasm.renderFile(i);
  const end = performance.now();
  console.log(`Done! [${end - start}ms]`);

  let cwd = '/';
  const segments = o.split(path.sep);
  for (const segment of segments.slice(0, segments.length - 1)) {
    cwd = path.join(cwd, segment);
    if (!fs.existsSync(cwd)) fs.mkdirSync(cwd);
  }
  fs.writeFileSync(o, result, 'utf8');
}
main();
