class Produto {
  constructor(produto, preco) {
    this.produto = produto;
    this.preco = preco;
  }

  aplicarDesconto(percentual) {
    this.preco -= this.preco * (percentual / 100);
  }
}

const produto = new Produto("Memoria RAM", 400);
console.log(produto);
produto.aplicarDesconto(10);
console.log(produto);
produto.aplicarDesconto(10);
console.log(produto);



const produto1 = new Produto("Mouse", 100);
console.log(produto1);
