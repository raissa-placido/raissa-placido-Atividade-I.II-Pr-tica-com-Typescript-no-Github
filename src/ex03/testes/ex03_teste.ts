import test from 'node:test';
import assert from 'node:assert/strict';
import { ordenarDecrescente } from '../ex03.js';

const input = ['carro', 'boneco', 'ave', 'lapis'];
const expected = ['lapis', 'carro', 'boneco', 'ave'];

test('3.1 Deve ordenar o array de strings em ordem decrescente', () => {
  assert.deepStrictEqual(ordenarDecrescente(input), expected);
});