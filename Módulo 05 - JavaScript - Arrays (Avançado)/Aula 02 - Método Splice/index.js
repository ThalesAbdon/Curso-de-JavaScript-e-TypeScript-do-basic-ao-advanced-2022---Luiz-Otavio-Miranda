const nomes = ["Eduardo", "Thales", "Joana", "Vitória", "Lucas"];

//nomes.splice(indice, delete, elem1, elem2);
//pop
// nomes.splice(-1,1)
//shift
// nomes.splice(0,1)
//Push
//nomes.splice(nomes.length,0,'Bianca','Eduarda')
//Unshift
//nomes.splice(0,0,'Bianca','Eduarda')

const removidos = nomes.splice(3, 2);
console.log(nomes);
console.log(removidos);
console.log(Number.MAX_VALUE);
const removeAndAdd = nomes.splice(3, 2, "Saiu Vitória", "Saiu Lucas");
console.log(nomes);
