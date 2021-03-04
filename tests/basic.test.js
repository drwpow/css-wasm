const { test } = require('uvu');
const assert = require('uvu/assert');
const parse = require('../index.cjs');

test('basic', async () => {
  const result = await parse('filepath');
  assert.equal(result, 'filepath');
});

test.run();
