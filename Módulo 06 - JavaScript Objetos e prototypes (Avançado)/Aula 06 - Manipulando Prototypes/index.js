//novo objeto -> Object.Prototype
const objA = {
  chaveA: "A",
};

//novo objeto -> Object.Prototype
const objB = {
  chaveB: "B",
};
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

function Produto(nome, preco) {
  this.name = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

const p1 = new Produto("Camisa", 50);
p1.desconto(10);
console.log(p1);

const p2 = {
  nome: "Copo",
  preco: 10,
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(10);
console.log(p2);
