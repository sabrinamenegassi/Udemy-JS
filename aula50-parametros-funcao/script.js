function funcao() {
  console.log('oi');
};
funcao('valor');

function funcaoA() {
  console.log(arguments[10]);
};
funcaoA('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcaoB() {
  let total = 0;
  for (argumento of arguments) {
    total += argumento;
  }
  console.log(total);
};
funcaoB(1, 2, 3, 4, 5, 6, 7);

function funcaoC(a, b, c) {
  let total = 0;
  for (argumento of arguments) {
    total += argumento;
  }
  console.log(total, a, b, c);
};
funcaoC(1, 2, 3, 4, 5, 6, 7);

function funcaoD(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f)
};
funcaoD(1, 2, 3);

function funcaoE(a, b = 2, c = 4) {
  console.log (a + b + c);
}
funcaoE(2, undefined, 20);

function funcaoF([valor1, valor2, valor3]) {
  console.log (valor1, valor2, valor3);
}
funcaoF(['Sabrina Fernanda Lira', 'Menegassi', 25]);

function conta(operador, acumulador, ...numeros) {
  for(let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }

  console.log(acumulador);
}
conta('-', 0, 20, 30, 40, 50);

const contaA = (...args) => {
  console.log(args);
};
contaA('+', 1, 20, 30, 40, 50);