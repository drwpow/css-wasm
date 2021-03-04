import init, { parse } from './wasm/css_wasm_parser.js';

export default async function build(filename) {
  await init();
  return await parse(filename);
}
