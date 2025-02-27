const nome = 'Sabrina';
const sobrenome = 'Menegassi';
const idade = 25;
const peso = 59.5;
const altura = 1.67;
let indiceMassaCorporal = peso / (altura * altura);
const anoAtual = 2024;
let anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(`tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`)
