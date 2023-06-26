//Reduce
//Some todos os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor) {
  acumulador += valor;
  return acumulador;
});
console.log(total);

//Retornar a pessoa mais velha
const pessoas = [
  { nome: "Daniel", idade: 20 },
  { nome: "Duda Eduarda", idade: 19 },
  { nome: "Maria Vitória", idade: 19 },
  { nome: "Thales Abdon", idade: 27 },
  { nome: "Felipe", idade: 20 },
  { nome: "Jardielson", idade: 24 },
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha);
