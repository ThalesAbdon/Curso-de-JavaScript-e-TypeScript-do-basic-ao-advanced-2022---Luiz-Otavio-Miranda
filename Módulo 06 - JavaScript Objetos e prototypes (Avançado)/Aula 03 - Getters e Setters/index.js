function Produto(name, price, stock) {
  this.name = name;
  this.price = price;
  Object.defineProperty(this, "stock", {
    enumerable: false, //mostra a chave
    configurable: false, // configurar
    get: function () {
      return stock;
    },
    set: function (valor) {
      stock = valor;
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    },
  };
}

const produto1 = new Produto("Camisa", 299, 7);
console.log(produto1);
console.log(produto1.stock);
produto1.stock = 100;
console.log(produto1.stock);

const p2 = criaProduto("Tênis");
console.log(p2.nome);
p2.nome = "Luva";
console.log(p2.nome);
