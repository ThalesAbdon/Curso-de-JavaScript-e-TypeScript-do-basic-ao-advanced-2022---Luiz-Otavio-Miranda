const arrayDeNumeros1 = [1, 2, 3];
const arrayDeNumeros2 = [4, 5, 6];
const arrayDeNumeros3 = [7, 8, 9];
//MANEIRA ERRADA DE CONCATENAR
const uniaoArrays = arrayDeNumeros1 + arrayDeNumeros2 + arrayDeNumeros3;
console.log(uniaoArrays);
console.log(typeof uniaoArrays);

//Uma das maneiras corretas de concatenar
const correctUnion = arrayDeNumeros1.concat(arrayDeNumeros2, arrayDeNumeros3);
console.log(correctUnion);

//Podemos usar rest operator
// ... rest -> ... spread

const unionWithSpreadOperator = [
  ...arrayDeNumeros1,
  ...arrayDeNumeros2,
  ...arrayDeNumeros3,
];
console.log(unionWithSpreadOperator);
