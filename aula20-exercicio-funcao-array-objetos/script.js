function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
  const pessoas = []

  /*form.onsubmit = function (evento) {
    event.preventDefault();
    alert();
    console.log('Foi enviado');
  };*/

  function recebeEventoForm (evento) {
    event.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
  }
  form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();