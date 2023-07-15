const produto = { nome: "Caneca", custo: 10.9 };
// const outraCoisa = { ...produto, material: "Plástico" };
const outraCoisa = Object.assign({}, produto, { material: "porcelana" });
// Object.freeze(produto); não pode alterar o objeto produto
// produto.nome = "Garrafa";
// outraCoisa.nome = "Copo";
// console.log(produto);
// console.log(outraCoisa);

console.log(Object.keys(produto));
console.log(Object.values(produto));
console.log(Object.entries(produto));
console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
