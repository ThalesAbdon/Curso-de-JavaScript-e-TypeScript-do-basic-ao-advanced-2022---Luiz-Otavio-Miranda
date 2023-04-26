//Função construtora
function Pessoa(nome, sobrenome) {
  const ID = 12345;
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.metodo = function () {
    console.log("Sou um metódo");
  };
}
const p1 = new Pessoa("Thales", "Abdon");
p1.metodo();
