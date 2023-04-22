// return
// Retorna um valor
// Termina a função

function soma(a, b) {
  return a + b;
}
console.log(soma(100, 20));

function criaMultiplicador(multiplicador) {
  function multiplicacao(n) {
    return n * multiplicador;
  }
  return multiplicacao;
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);

console.log(duplica(2));
console.log(triplica(10));
