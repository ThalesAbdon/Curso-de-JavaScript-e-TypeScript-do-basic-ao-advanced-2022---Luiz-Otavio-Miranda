/*
Operadores de comparação
> maior
>= maior igual
< menor
<= menor igual
== igualdade(valor)
=== igualdade estrita(valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/

console.log(10 > 5); //true
const comparar = 20 > 200;
console.log(comparar)//true
console.log(10 >= 11) // false
const num1 = 10
const stringNum = '10'
console.log(num1 == stringNum) // teria que dar falso, pois um é string e outro é Number
console.log(num1 === stringNum)
