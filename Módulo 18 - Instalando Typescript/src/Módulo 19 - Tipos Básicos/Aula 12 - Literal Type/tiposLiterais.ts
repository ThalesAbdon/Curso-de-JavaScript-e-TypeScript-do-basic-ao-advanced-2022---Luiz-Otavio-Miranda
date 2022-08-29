let x = 10; //eslint-disable-line
x = 0b100;
const y = 10;
let a = 100 as const; //eslint-disable-line
console.log(a);

const person = {
  name: 'Thales' as const,
  lastname: 'Sousa',
};

export function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Vermelho'));
//Module mode
export default 1;
