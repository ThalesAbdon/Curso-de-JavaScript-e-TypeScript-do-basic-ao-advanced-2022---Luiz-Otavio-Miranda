type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;
const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function traduzirCor(cor: CoresChaves, cores: typeof coresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
