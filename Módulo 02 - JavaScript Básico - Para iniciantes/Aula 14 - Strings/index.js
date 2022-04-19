//let umaString = " usando aspas \"texto\" dentro de aspas";
//let umaString = " usando barras invertidas \\";
let umaString = "Um texto";
console.log(umaString.charAt(6));
//o length retorna o tamanho da String
console.log(umaString.length);
console.log(umaString.concat(' ', "usando concat"));
console.log(umaString.indexOf('m'));
//replace troca uma letra/palavra por outra
console.log(umaString.replace('texto','usando replace'))
// para "recortar" pedaços da string
console.log(umaString.slice(0,2));
//para dividir em arrays
console.log(umaString.split(' '));
// para deixar a String toda maiuscula
console.log(umaString.toUpperCase)
// para deixar a String toda minuscula
console.log(umaString.toLowerCase)
