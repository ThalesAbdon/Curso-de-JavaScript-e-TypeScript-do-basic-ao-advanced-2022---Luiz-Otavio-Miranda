export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  //sobrescrever um metódo
  getNomeCompleto(): string {
    return 'É UM ALUNO(A): ' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'É UM(A) CLIENTE:' + this.nome + ' ' + this.sobrenome;
  }
}

const aluno = new Aluno('Thales', 'Abdon', 26, '0000000000');
const cliente = new Aluno('Maria', 'Rosa', 46, '1111111111');

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
