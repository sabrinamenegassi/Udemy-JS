class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
  console.log(`${this.nome} está falando.`);
};

const p1 = new Pessoa('Sabrina', 'Menegassi');
const p2 = new Pessoa2('Fernanda', 'Lira');

console.log(p1);
