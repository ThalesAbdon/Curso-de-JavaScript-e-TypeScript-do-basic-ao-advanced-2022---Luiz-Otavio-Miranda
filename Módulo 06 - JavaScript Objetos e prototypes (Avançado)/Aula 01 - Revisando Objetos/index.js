//objeto literal que tem um valor nome e sobrenome
const pessoa = {
  nome: "Thales",
  sobrenome: "Abdon",
};

console.log(pessoa.nome);
console.log(pessoa["nome"]);
console.log(pessoa.sobrenome);
delete pessoa.sobrenome;
console.log(pessoa.sobrenome);

for (let chave in pessoa) {
  console.log(pessoa);
}

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const pessoa1 = criaPessoa("João", "Fernandez");
console.log(pessoa1.nomeCompleto);

function PessoaConstructorFunction(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p2 = new PessoaConstructorFunction("Peter", "Parker");
Object.freeze(p2);
console.log(p2);
