build:
	@echo 🦀 Building wasm bindings from Rust…
	cd parser && wasm-pack build --target web --out-dir ../wasm
	cd parser && wasm-pack build --target nodejs --out-dir ../wasm-node
	rm ./wasm/package.json
	rm ./wasm-node/package.json
