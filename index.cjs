const wasm = require('./wasm-node/css_wasm_parser.js');

async function parseCode(input) {
  return await wasm.parseCode(input);
}
exports.parseCode = parseCode;

async function parseFile(input) {
  return await wasm.parseFile(input);
}
exports.parseFile = parseFile;
