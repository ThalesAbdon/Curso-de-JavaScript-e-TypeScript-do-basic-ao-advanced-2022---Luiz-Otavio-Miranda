//outra maneira de se criar um array:
// const nomes = new Array("Eduardo", "Thales", "Joana", "Vitória");
const nomes = ["Eduardo", "Thales", "Joana", "Vitória"];
//Valor por referência
const novo = nomes;
nomes[0] = "Bruno";
delete nomes[2];
console.log(nomes);
novo.pop();
console.log(nomes);
//adicionar um elemento no FINAL do array
novo.push("Vitória");
console.log(nomes);
// para copiar um array para um novo array:
const copiaArray = [...nomes];
console.log(copiaArray);
//verificar tamanho do array(quantos elementos o array possui):
console.log(copiaArray.length);
//Remover um elemento e armazenar ele:
const removido = copiaArray.splice(2, 1);
console.log(removido);
console.log(copiaArray);
//adicionar um elemento no Inicio do array
copiaArray.unshift("Felipe");
console.log(copiaArray);
//Slice para dividir o array
const arrayCortado = copiaArray.slice(1, -1);
console.log(arrayCortado);
//Função Split
const nomeCompleto = "Guilherme José Ferreira Costa Silviano Braz";
const nomesSeparado = nomeCompleto.split(" ");
console.log(nomesSeparado);
