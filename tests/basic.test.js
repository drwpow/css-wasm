const { test } = require('uvu');
const assert = require('uvu/assert');
const { parseCode } = require('../index.cjs');

test('basic', async () => {
  const result = await parseCode(`$blue: #00f;

body {
  color: $blue;
}
`);
  assert.equal(result, 'body{color:#00f}');
});

test.run();
