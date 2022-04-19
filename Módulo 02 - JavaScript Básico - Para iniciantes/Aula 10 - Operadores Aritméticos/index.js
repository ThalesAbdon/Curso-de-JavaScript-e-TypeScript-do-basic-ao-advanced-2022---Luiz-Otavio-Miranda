//Aritméticos:
// +  Adição/Concatenação
const numero1 = 10;
const numero2 = 90;
console.log("Soma:", numero1 + numero2);
const nome = "Lucas";
const sobrenome = "Silva";
console.log("Concatenção:",nome + " " + sobrenome);
// - Subtração
console.log("Subtração:", numero2 - numero1);
// * Multiplicação
console.log("Multiplicação:", numero1 * numero2);
// / Divisão
console.log("Divisão:", numero2/numero1);
// ** Potenciação
console.log("Potenciação:",numero1**2);
// % Módulo
console.log("Módulo:",numero1 % 3);
//Precedência
// ()
// **
// * / %
// +  -

//para fazer uso de um contador, é necessário usar let
let contador = 1;
console.log("Contador: ", contador)
contador++;
console.log("Contador incrementado: ", contador)
const passo = 5;
contador += passo;
console.log("Contador incrementado pela variável passo:", contador)
contador *= passo;
console.log("Contador agora foi multiplicado pela variável passo:", contador)
let numeroString = '20';
console.log('"SOMANDO" string e numero:',numeroString + numero1)
//usando cast
//parseInt(inteiro), parseFloat(decimais), Number
numeroString = parseInt('20');
console.log('Após usar um cast, agora sim somando a "string"(que agora é inteiro) e numero:',numeroString + numero1)