const dadosCliente1: [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [2, 'Thales', 'Abdon'];
const dadosCliente3: [number, string, string?] = [1, 'Luiz'];
//diferente de Python, conseguimos alterar as variavéis(desde que seja do mesmo tipo)
dadosCliente1[0] = 100;

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

//readonly array

const array1: readonly string[] = ['Thales', 'Abdon'];
const array2: ReadonlyArray<string> = ['Thales', 'Abdon'];
console.log(array1);
console.log(array2);
