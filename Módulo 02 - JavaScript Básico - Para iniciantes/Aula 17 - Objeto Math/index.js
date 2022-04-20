let num1 = 9.87327231;
// Para arredondar um número para baixo
let num2 = Math.floor(num1)
console.log(num2)
//Para arredondar um número para cima
num2 = Math.ceil(num1)
console.log(num2)
// Para arrenodndar automáticamente:
num2 = Math.round(num1)
console.log(num2)

//para achar o maior número de uma sequência de números
console.log(Math.max(1,2,3,4,121,22131,1500,231,894,754,832))
// para gerar um número "randômico"
console.log(Math.random())
// definir o intervalo de número "randômico"
let aleatorio = Math.random() * (100 - 1) + 1;
console.log(aleatorio)
let contadorAleatorio = 0
/*
while(contadorAleatorio < 1000){
    contadorAleatorio++;
    console.log(Math.random() * (100 - 1) + 1);
}
*/

// para definir o intervalo de número "randômico" e fazer ele ser um inteiro
let aleatorioInteiro = Math.round(Math.random() * (100 - 1) + 1);
console.log(aleatorioInteiro)
let contadorAleatorioInteiro = 0;
/*
//while para gerar 1000 números "randômicos"
while( contadorAleatorioInteiro < 1000){
    contadorAleatorioInteiro++;
    console.log(Math.round(Math.random() * (100 - 1) + 1));
}
*/

//O Valor de PI
console.log(Math.PI);
//Potenciar um número: BASE,EXPOENTE
console.log(Math.pow(2,10));
//Para tirar raiz quadrade de um número:
console.log(9 ** (1/2));
console.log(25 ** 0.5);


