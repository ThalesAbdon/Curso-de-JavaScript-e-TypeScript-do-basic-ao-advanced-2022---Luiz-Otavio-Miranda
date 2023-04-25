//Factory Function
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    altura,
    peso,

    //getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    //setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      console.log(valor);
    },
  };
}

const pessoa1 = criaPessoa("Thales", "Abdon", 1.75, 80);
console.log(pessoa1.imc);
console.log(pessoa1.nomeCompleto);
