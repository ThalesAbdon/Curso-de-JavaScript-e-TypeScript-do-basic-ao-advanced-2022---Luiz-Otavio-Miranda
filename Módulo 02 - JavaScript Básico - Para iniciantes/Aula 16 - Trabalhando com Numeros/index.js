let num1 = 1;
let num2 = 2.5;
let num3 = 10;
let num4 = 18.932738223093280193827346892103280931298231367128123
let num5 = 0.9
let num6 = 0.1
// retornando temporariamente num1 como String
console.log(num1.toString() + num3)
// AGORA num1 realmente se torna uma string para o resto do código(até ser mudado novamente)
num1 = num1.toString()
//para ver a representa binária de um número, basta colocar .toString(2)
console.log(num3.toString(2))
//para ver uma quantidade desejada de casas decimais(ARRENDONDAR), basta usar toFixed(X) onde x é o número de casas decimais
console.log(num4.toFixed(3)) 
// para verificar se é um número inteiro, usamos .isInteger()
console.log(Number.isInteger(num1))
console.log(Number.isInteger(num4))
// para verificar se é um NaN
let testeNaN = num1 * 'tem que dar NaN';
console.log(Number.isNaN(testeNaN));
//ajustando o erro de precisão 0.999999999999999999(com 0.7 + 0.1 tá dando 0.7999999999999 e mas quando uso 0.9 + 0.1 tá dando 1)
// não entendi, talvez o JS atualizou e agora o bug de imprecisão para a soma dos floats tenha sido ajustado?
num5 += num6;
console.log(num5);
console.log(Number.isInteger(num5));