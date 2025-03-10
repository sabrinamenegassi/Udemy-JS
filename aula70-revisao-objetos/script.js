// Factory functions / Constructor functions / Classes
/*
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);
}

const p1 = new Pessoa('Sabrina', 'Menegassi');
const p2 = new Pessoa('Maria', 'Miranda');

console.log(p1);
console.log(p2);
*/
const pessoa1 = new Object();
pessoa1.nome = 'Sabrina';
pessoa1.sobrenome = 'Menegassi';
pessoa1.idade = 25
pessoa1.falaNome = function() {
  console.log(`${this.nome} está falando seu nome`);
};
pessoa1.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.falaNome());
console.log(pessoa1.getDataNascimento());