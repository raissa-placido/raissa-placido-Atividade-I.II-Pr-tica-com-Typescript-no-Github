import test from 'node:test';
import assert from 'node:assert/strict';
import { concatenarComJoin } from '../ex02.js';

const input = ['Arrays', 'com', 'TypeScript'];
const expected = 'Arrays com TypeScript';

test('2. Deve concatenar o array de strings com 1 espaço usando join', () => {
  assert.strictEqual(concatenarComJoin(input), expected);
});