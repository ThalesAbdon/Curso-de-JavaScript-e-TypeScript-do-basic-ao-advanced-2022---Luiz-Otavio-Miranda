//Declaração de Função ( Function hoisting)
// ou seja, o javascript consegue executar uma função mesmo que ela seja escrita em linhas abaixo da chamada.
sayHi();
function sayHi() {
  console.log("Hi");
}

// First-Class objects
// Javascript trata funções como dados
const souUmDado = function () {
  console.log("Sou um dado");
};
souUmDado();

function executaFuncao(funcao) {
  console.log("vou");
  funcao();
}
executaFuncao(souUmDado);

//Arrow Functions
const functionArrow = () => {
  console.log("sou uma arrow function");
};
