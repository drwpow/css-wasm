const { parse } = require('./wasm-node/css_wasm_parser.js');

async function build(filename) {
  return await parse(filename);
}
module.exports = build;
