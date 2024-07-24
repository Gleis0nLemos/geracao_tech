class Produto {
  constructor(id, nome, valor) {
    this.id = id;
    this.nome = nome;
    this.valor = valor;
  }

  static listarProdutos() {
    return JSON.stringify(produtos);
  }

  static adicionarProduto(produto) {
    produtos.push(produto);

    return JSON.stringify({
      mensagem: 'Produto adicionado com sucesso'
    });
  }

  static editarProduto(id, produtoEditado) {
    const produto = produtos.find(p => p.id === id);
    if (produto) {
      Object.assign(produto, produtoEditado);
    } else {
      return 'Produto não encontrado'
    }
  }

  static removerProduto(id) {
    const produtoARemover = produtos.find(p => p.id === id);

    if (produtoARemover) {
      const indice = produtos.indexOf(produtoARemover);
      produtos.splice(indice, 1);
    } else {
      return JSON.stringify({
        mensagem: 'Produto não encontrado'
      })
    }
  }
}

const produtos = [
  new Produto(1, 'Teclado', 50),
  new Produto(2, 'Mouse', 30)
]

module.exports = Produto