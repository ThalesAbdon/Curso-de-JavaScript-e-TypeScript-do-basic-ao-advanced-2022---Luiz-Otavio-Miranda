const numero = 10;

if(numero >= 0) {
    console.log('Sim, o número é maior ou igual 0')
}

if(numero >= 0 && numero <=9) {
    console.log('Sim, o número é maior ou igual 0')
}else{
    console.log("O número não está entre 0 e 10")
}

const idade = 21;

if(idade >= 0 && idade <=13){
    console.log("Você é uma criança!");
}else if(idade > 13 && idade <= 18){
    console.log("Você é um jovem");
}else if(idade > 18 && idade <= 60){
    console.log("Você é um adulto!");
}else{
    console.log("Você é um idoso!")
}