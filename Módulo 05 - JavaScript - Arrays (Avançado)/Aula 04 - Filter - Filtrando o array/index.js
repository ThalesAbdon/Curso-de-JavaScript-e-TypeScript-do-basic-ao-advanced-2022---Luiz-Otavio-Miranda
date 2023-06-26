//Filter
//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
function minhaFuncao([]) {
  result = [];
  for (i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
      result.push(numeros[i]);
    }
  }
  return result;
}
console.log(minhaFuncao(numeros));

//usando Filter
const numerosFiltrados = numeros.filter((valor) => valor > 10);
console.log(numerosFiltrados);

const pessoas = [
  { nome: "Daniel", idade: 20 },
  { nome: "Duda Eduarda", idade: 19 },
  { nome: "Maria Vitória", idade: 19 },
  { nome: "Thales Abdon", idade: 27 },
  { nome: "Felipe", idade: 20 },
  { nome: "Jardielson", idade: 24 },
];

const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 8);
const pessoasComIdadeMaiorQue20 = pessoas.filter((obj) => obj.idade >= 21);
const pessoasComNomeQueTerminaComA = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith("a")
);
console.log(pessoasComNomeGrande);
console.log(pessoasComIdadeMaiorQue20);
console.log(pessoasComNomeQueTerminaComA);
