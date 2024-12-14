class Produto {
  static produtos = [];

  static listar() {
    return this.produtos;
  }

  static adicionar(produto) {
    this.produtos.push(produto);
  }

  static editar(id, dadosAtualizados) {
    const index = this.findIndex(produto => produto.id === id);
    if (index !== -1) {
      this.produtos[index] = { ...this.produtos[index], ...dadosAtualizados};
    }
  }

  static excluir(id) {
    this.produtos = this.produtos.filter(produto => produto.id !== id);
  }

  static findIndex(produto) {
    return this.produtos.findIndex(p => p.id === produto.id)
  }
}

module.exports = Produto;
