// Funções auto invocadas

(function (idade, peso, altura) {
  const sobrenome = "Sousa";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Thales"));
  }
  falaNome();
  console.log(idade, peso, altura);
})(26, 90, 1.75);
