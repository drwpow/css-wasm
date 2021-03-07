import * as wasm from './wasm/css_wasm_parser.js';

export async function parseCode(input) {
  await wasm.default.init();
  return await wasm.parseCode(input);
}

export async function parseFile(input) {
  await wasm.default.init();
  return await wasm.parseFile(input);
}
