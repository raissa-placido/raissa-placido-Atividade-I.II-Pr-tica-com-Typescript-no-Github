export interface Animal {
  fazerSom(): string;
}

export class Cachorro implements Animal {
  nome: string = 'Fulaninho';

  fazerSom(): string {
    return `${this.nome} diz: Au au!`;
  }
}

export class Gato implements Animal {
  cor: string = 'Sem cor';

  fazerSom(): string {
    return `O gato ${this.cor} diz: Miau!`;
  }
}