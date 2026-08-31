import { test, expect } from 'vitest';
import { Cachorro, Gato } from '../ex06.js';

test('6. Deve alterar os atributos e executar o método da interface', () => {
  // 1. Instancia os objetos
  const dog = new Cachorro();
  const cat = new Gato();

  // 2. Altera os atributos
  dog.nome = 'Scooby Doo';
  cat.cor = 'laranja';

  // 3. Valida os métodos usando o método .toBe()
  expect(dog.fazerSom()).toBe('Scooby Doo diz: Au au!');
  expect(cat.cor).toBe('laranja');
  expect(cat.fazerSom()).toBe('O gato laranja diz: Miau!');
});
