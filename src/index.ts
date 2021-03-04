import init, { parse } from '../pkg/css_wasm_parser.js';

export default async function buildStyles(filepath: string) {
  await init();
  const contents = await parse(filepath);
  return contents;
}
