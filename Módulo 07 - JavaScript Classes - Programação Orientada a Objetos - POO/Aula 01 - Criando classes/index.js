class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando`);
  }

  comer() {
    console.log(`${this.nome} está comendo`);
  }

  beber() {
    console.log(`${this.nome} está bebendo`);
  }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando`);
};
const p1 = new Pessoa("Thales", "Abdon");
const p2 = new Pessoa2("Thales", "Abdon");
console.log(p1);
p1.falar();
p2.falar();
p1.comer();
p1.beber();
