// Primitivos (imutáveis) - string,number,boolean,undefined, null ,(bigint,symbol)

let vogal = 'a';
let aux = vogal;// aux recebe uma cópia de vogal, então não importa se eu mudar o valor de vogal pós atribuição.
console.log(vogal,aux);
vogal = 'e'
console.log(vogal,aux);// aux continua sendo a, pois aux recebeu o valor de vogal antes da mudança.

//Referência(mutável) - array,object,function
let listaNumeros = [1,2,3,4,5];
let auxListaNumeros = listaNumeros;
let copiaListaNumero = [...listaNumeros]
console.log(listaNumeros,auxListaNumeros)
// nesse caso, como ambos são de Referência.. então apontam pro mesmo endereço da memória... ou seja, se mudarmos listaNumeros
// também iremos mudar auxListaNumeros.
listaNumeros.push(6);
console.log(listaNumeros,auxListaNumeros)
// caso eu queria copiar os valores da listaNumeros, basta usarmos: [...listaNumeros](ver linha 12)
console.log(listaNumeros,copiaListaNumero)
//mesma coisa funciona para funções:
const a = {
    nome: 'Thales',
    sobrenome: 'Sousa',
};
const b = a;
const c = {...a}
console.log(a,b,c)
a.nome = 'Giovana';
console.log(a,b,c)


