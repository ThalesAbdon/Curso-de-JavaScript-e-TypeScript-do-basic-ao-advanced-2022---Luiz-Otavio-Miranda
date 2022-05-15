const numeros = [1,2,3,4,5,6,7];

for (let numero of numeros){
    if(numero === 2){
        continue;
    }
    console.log(numero);

    if(numero === 5){
        console.log("Break encontrado!");
        break;
    }
}