import { test, expect } from 'vitest';

import { filtrarPares } from '../ex05.js';

const input = [8, 3, 9, 5, 6, 12];
const expected = [8, 6, 12];

test('5. Deve filtrar e retornar apenas os números pares do array', () => {
  expect(filtrarPares(input)).toEqual(expected);
});