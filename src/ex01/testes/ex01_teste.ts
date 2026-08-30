import test from 'node:test';
import assert from 'node:assert/strict';
import { elevarAoQuadradoComFor, elevarAoQuadradoComForEach } from '../ex01.js';

const input = [3, 5, 7, 3, 8, 9, 1];
const expected = [9, 25, 49, 9, 64, 81, 1];

test('deve elevar ao quadrado usando "for"', () => {
  assert.deepStrictEqual(elevarAoQuadradoComFor(input), expected);
});

test('deve elevar ao quadrado usando "forEach"', () => {
  assert.deepStrictEqual(elevarAoQuadradoComForEach(input), expected);
});