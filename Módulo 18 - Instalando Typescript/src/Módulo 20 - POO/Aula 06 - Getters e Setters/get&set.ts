export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  set cpf(valor: string) {
    console.log('SETTER CHAMADO!');
    this._cpf = valor;
  }
  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Thales', 'Abdon', 26, '000.000.000-00');
pessoa.cpf = '123.456.789-11';
console.log(pessoa.cpf);
