type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

//type Pessoa = TemNome | TemIdade | TemSobrenome;
type Pessoa = TemNome & TemIdade & TemSobrenome;

const pessoa: Pessoa = {
  nome: 'Thales',
  sobrenome: 'Sousa',
  idade: 30,
};

export { pessoa };
