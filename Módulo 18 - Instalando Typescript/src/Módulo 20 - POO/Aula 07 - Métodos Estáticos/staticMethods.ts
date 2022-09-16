export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static falaOi(): void {
    console.log('OI');
  }
}

const pessoa = new Pessoa('Thales', 'Abdon', 26, '000.000.000-00');
pessoa.cpf = '123.456.789-11';
console.log(pessoa);
Pessoa.falaOi();
