import { test, expect } from 'vitest';

import { pegarPrimeirosElementos } from '../ex04.js';

const input = [2, 4, 6, 2, 8, 9, 5];
const expected = [2, 4];

test('4. Deve extrair apenas os dois primeiros elementos do array usando slice', () => {
  expect(pegarPrimeirosElementos(input)).toEqual( expected);
});