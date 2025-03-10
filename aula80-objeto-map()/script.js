const pessoas = [
  {id: 3, nome: 'Sabrina'},
  {id: 2, nome: 'Fernanda'},
  {id: 1, nome: 'Luisa'},
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const {id} = pessoa;
  novasPessoas.set(id, { ...pessoa});
}

for (const pessoa of novasPessoas) {
  console.log(pessoa);
}