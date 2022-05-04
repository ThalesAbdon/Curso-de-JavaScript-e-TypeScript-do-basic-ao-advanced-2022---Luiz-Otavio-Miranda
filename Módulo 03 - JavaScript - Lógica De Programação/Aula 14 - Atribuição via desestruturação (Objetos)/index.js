const pessoa = {
    nome: 'Luiza',
    sobrenome: 'Lima',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 22
    }
};

//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO!
const { nome: n, sobrenome, endereco: {rua,numero}} = pessoa;
console.log(n, sobrenome, rua,numero)