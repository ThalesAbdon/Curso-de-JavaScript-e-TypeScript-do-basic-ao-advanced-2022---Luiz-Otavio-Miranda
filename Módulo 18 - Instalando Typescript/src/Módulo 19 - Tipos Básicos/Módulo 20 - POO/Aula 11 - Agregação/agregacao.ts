export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];
  inserirProduto(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }
  quantidadeDeProdutos(): number {
    return this.produtos.length;
  }
  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camisa', 50.0);
const carrinhoDeCompras1 = new CarrinhoDeCompras();
carrinhoDeCompras1.inserirProduto(produto1);
console.log(carrinhoDeCompras1);
console.log(carrinhoDeCompras1.valorTotal());
