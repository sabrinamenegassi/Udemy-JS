//console.log('Linha 0');
//console.log('Linha 1');
//console.log('Linha 2');
//console.log('Linha 3');
//console.log('Linha 4');
//console.log('Linha 5');

for (let i = 0; i <= 5; i++) {
  console.log(`Linha ${i}`);
}

for (let i = 0; i <= 5; i++) {
  const par = i % 2 === 0 ? 'par': 'impar';
  console.log(i, par);
}

const frutas = ['Maçã', 'Pêra', 'Uva'];
const novasFrutas = frutas.map(el => el.toLowerCase());
console.log(novasFrutas); // [ 'maçã', 'pêra', 'uva' ]