/* eslint-disable */
let nome: string = 'Thales';
let idade: number = 26;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-Symbol');
//let big: bigint = 10n;

//Arrays
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers2: number[] = [1, 2, 3];
let arrayString: Array<string> = ['a', 'b'];
let arrayString2: string[] = ['a', 'b'];

//Objects
// interrogação torna a variavel opcional
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 26,
  nome: 'Thales',
};

//Functions

function add(x: number, y: number) {
  return x + y;
}
const add2: (x: number, y: number) => number = (x, y) => x + y;
const result = add(2, 2);
