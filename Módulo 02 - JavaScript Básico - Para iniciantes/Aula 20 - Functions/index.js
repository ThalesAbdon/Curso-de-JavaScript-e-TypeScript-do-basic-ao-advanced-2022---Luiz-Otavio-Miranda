function goodMorning(nome){
return (`Bom dia ${nome}`)
}

console.log(goodMorning("Luiz"));

//Uma função para somar multiplicar 2 números
function multiplica(num1,num2){
    const resultado = num1 * num2;
    return resultado;
}
console.log(multiplica(2,6))

//Uma função que tira a raiz quadrada de um número n
const raiz  = function(n){
return n ** 0.5;
};

console.log(raiz(9))


// Mesma função anterior, só que usando arrow function
const raizArrowFunction  = n => n ** 0.5;
console.log(raiz(25))