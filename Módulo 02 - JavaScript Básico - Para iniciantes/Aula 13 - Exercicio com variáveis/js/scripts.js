
let varA = 'A';//Quero que varA receba B
let varB = 'B';//Quero que varB receba C
let varC = 'C';//Quero que varC receba A
//Jeito antigo usando uma variável auxiliar que armazena o valor de A
/*
let varAux = varA;
varA = varB;
varB = varC;
varC = varAux;
alert(`${varC + " " + varA + " " + varB}`);
*/ 

//Jeito moderno usando Javascript:
[varA,varB,varC] = [varB,varC,varA];   
alert(`${varC + " " + varA + " " + varB}`); 


