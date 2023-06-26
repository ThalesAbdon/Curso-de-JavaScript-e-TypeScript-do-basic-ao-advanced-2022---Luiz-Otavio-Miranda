//MAP
//Dobre os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor) => valor * 2);
console.log(numerosEmDobro);

const pessoas = [
  { nome: "Daniel", idade: 20 },
  { nome: "Duda Eduarda", idade: 19 },
  { nome: "Maria Vitória", idade: 19 },
  { nome: "Thales Abdon", idade: 27 },
  { nome: "Felipe", idade: 20 },
  { nome: "Jardielson", idade: 24 },
];

const nomes = pessoas.map((obj) => obj.nome);
console.log(nomes);
const idades = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(idades);
const id = pessoas.map((obj, indice) => {
  const newObj = { ...obj };
  newObj.id = indice;
  return newObj;
});
console.log(id);
