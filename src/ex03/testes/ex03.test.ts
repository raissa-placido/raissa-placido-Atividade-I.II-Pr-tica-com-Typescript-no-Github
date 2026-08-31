import { test, expect } from 'vitest';
import { ordenarDecrescente } from '../ex03';

const input = ['carro', 'boneco', 'ave', 'lapis'];
const expected = ['lapis', 'carro', 'boneco', 'ave'];

test('3. Deve ordenar o array de strings em ordem decrescente', () => {
  expect(ordenarDecrescente(input)).toEqual(expected);});