function Produto(name, price) {
  this.name = name;
  this.price = price;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(name, price, cor) {
  Produto.call(this, name, price);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
const camiseta = new Camiseta("Polo", 100, "Preta");
camiseta.aumento(10);
console.log(camiseta);
