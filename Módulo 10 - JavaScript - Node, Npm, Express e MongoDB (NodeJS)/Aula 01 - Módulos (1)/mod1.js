const nome = "Thales";
const sobrenome = "Abdon";

const falaNome = () => nome + " " + sobrenome;

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}
module.exports.Pessoa = Pessoa;

// console.log(module.exports);
