extern crate rsass;
extern crate wasm_bindgen;

mod utils;

use rsass::{compile_scss, compile_scss_path, output};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn parseFile(input: &str) -> String {
  let path = input.as_ref();
  let format = output::Format {
    style: output::Style::Compressed,
    precision: 5,
  };
  return compile_scss_path(path, format)
    .map_err(|e| {
      eprintln!("{}", e);
      "rsass failed".into()
    })
    .and_then(|s| {
      String::from_utf8(s)
        .map(|s| s.replace("\n\n", "\n"))
        .map_err(|e| format!("{:?}", e))
    })
    .unwrap();
}

#[wasm_bindgen]
pub fn parseCode(input: &str) -> String {
  let format = output::Format {
    style: output::Style::Compressed,
    precision: 5,
  };
  return compile_scss(input.as_bytes(), format)
    .map_err(|e| {
      eprintln!("{}", e);
      "rsass failed".into()
    })
    .and_then(|s| {
      String::from_utf8(s)
        .map(|s| s.replace("\n\n", "\n"))
        .map_err(|e| format!("{:?}", e))
    })
    .unwrap();
}
