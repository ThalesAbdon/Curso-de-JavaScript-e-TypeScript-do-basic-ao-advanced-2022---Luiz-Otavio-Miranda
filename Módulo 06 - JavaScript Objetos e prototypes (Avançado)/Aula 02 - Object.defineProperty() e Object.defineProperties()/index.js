function Produto(name, price, stock) {
  Object.defineProperties(this, {
    name: { enumerable: true, value: name, writable: true, configurable: true },
    price: {
      enumerable: true,
      value: price,
      writable: true,
      configurable: true,
    },
  });

  Object.defineProperty(this, "stock", {
    enumerable: false, //mostra a chave
    value: stock, // valor
    writable: false, // pode alterar o valor
    configurable: false, // configurar
  });
}

const produto1 = new Produto("Camisa", 299, 7);
console.log(produto1);
