//Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((acumulador, valor) => acumulador + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const resultado = multiplicaArgs(1, 2, 3);
const concatenar = concatenaString('T', 'h', 'a', 'l', 'e', 's');
const upper = toUpperCase('a', 'b', 'c');
console.log(resultado);
console.log(concatenar);
console.log(upper);
