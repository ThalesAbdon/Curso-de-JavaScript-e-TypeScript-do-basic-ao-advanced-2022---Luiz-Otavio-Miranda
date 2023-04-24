//Closures é a habilidade que a função tem em acessar seu escopo léxico!
function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao("Thales");
const funcao2 = retornaFuncao("Abdon");
console.log(funcao);
console.log(funcao(), funcao2());
