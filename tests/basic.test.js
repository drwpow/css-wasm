const { test } = require('uvu');
const assert = require('uvu/assert');
const { renderData } = require('../index.cjs');

test('basic', () => {
  const result = renderData(`$blue: #00f;

body {
  color: $blue;
}
`);
  assert.equal(result, 'body{color:#00f}');
});

test.run();
