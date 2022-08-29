type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoinha: Pessoa = {
  idade: 26,
  nome: 'Thales',
  salario: 1500,
};

export function setCorPreferida(pessoinha: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoinha, corPreferida: cor };
}

console.log(setCorPreferida(pessoinha, 'Azul'));
