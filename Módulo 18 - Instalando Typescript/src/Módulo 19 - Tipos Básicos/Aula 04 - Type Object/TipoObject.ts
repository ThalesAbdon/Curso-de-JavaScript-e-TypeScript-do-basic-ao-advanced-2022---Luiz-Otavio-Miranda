const objetoA: {
  chaveA: string;
  readonly chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor de A',
  chaveB: 'VALOR DE B',
};

objetoA.chaveA = 'Recebendo outro valor';
objetoA.chaveD = 'Nova chave que não estava no escopo';

//objetoA.chaveB = 'Tentando alterar';
console.log(objetoA);
