const nome = 'Thales'

console.log("Usando for clássico");
for(let i = 0; i < nome.length; i++){
console.log(nome[i])
}

console.log("Usando for i");
for(let i in nome){
    console.log(nome[i]);
}
console.log("Usando for of");
for(let valor of nome){
    console.log(valor);
}