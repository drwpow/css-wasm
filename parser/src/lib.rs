extern crate rsass;
extern crate wasm_bindgen;

mod utils;

use rsass::{compile_scss, compile_scss_path, output};
use std::path::Path;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn renderData(input: &str) -> String {
  // set up default options
  let format = output::Format {
    style: output::Style::Compressed,
    precision: 8,
  };
  // execute
  return compile_scss(input.as_bytes(), format)
    .map_err(|e| {
      eprintln!("{}", e);
      "rsass failed".into()
    })
    .and_then(|s| String::from_utf8(s).map_err(|e| format!("{:?}", e)))
    .unwrap();
}

#[wasm_bindgen]
pub fn renderFile(input: &str) -> String {
  let path = Path::new(input);
  // set up default options
  let format = output::Format {
    style: output::Style::Compressed,
    precision: 8,
  };
  // execute
  return compile_scss_path(&path, format)
    .map_err(|e| {
      eprintln!("{}", e);
      "rsass failed".into()
    })
    .and_then(|s| String::from_utf8(s).map_err(|e| format!("{:?}", e)))
    .unwrap();
}
