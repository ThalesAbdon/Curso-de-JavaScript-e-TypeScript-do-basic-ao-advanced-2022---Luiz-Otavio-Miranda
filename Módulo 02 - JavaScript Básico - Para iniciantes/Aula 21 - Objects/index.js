const pessoa1 = {
 nome: 'Lucas',
 sobrenome: 'Silva',
 idade: 20,

 fala(){
    console.log(`${this.nome} está falando Oi`);
},
};
console.log(pessoa1.nome);
// também podemos usar uma função
function criaPessoa(nome,sobrenome,idade){
    return{
    nome: nome,
    sobrenome: sobrenome,
    idade: idade 
    };
}

const pessoa2 = criaPessoa('Maria','Pascoal',21);
const pessoa3 = criaPessoa('Daniela','Araújo',27);
console.log(pessoa2.nome)
console.log(pessoa3.nome)
pessoa2.fala()