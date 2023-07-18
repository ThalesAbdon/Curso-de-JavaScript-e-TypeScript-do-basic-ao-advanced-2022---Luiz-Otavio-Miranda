/*
Um protótipo em JavaScript é um objeto que contém métodos e propriedades que são compartilhados por todos os objetos que são derivados dele.
 

benefícios de usar protótipos em JavaScript:
Os protótipos podem ser usados ​​para criar hierarquias de objetos, o que permite que os objetos compartilhem propriedades e métodos.
Os protótipos podem ser usados ​​para criar objetos anônimos, o que pode ser útil para fins de desempenho.
Os protótipos podem ser usados ​​para estender objetos existentes, o que pode ser útil para fins de reusabilidade.
*/

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + "" + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + "" + this.sobrenome;
};

const pessoa1 = new Pessoa("Thales", "Abdon");
