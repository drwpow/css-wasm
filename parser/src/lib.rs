extern crate wasm_bindgen;

mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn parse(filename: &str) -> String {
  return filename.to_string();
}
