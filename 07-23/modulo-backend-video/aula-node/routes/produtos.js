class Produto {
  static produtos = [
    {
      id: 1,
      nome: 'Mouse USB',
      valor: 15.99
    },
    {
      id: 2,
      nome: 'Teclado USB',
      valor: 29.99
    }
  ];
  
  static listar() {
    return Produto.produtos;
  }

  static adicionar(id, nome, valor) {
    Produto.produtos.push({
      id: id,
      nome: nome,
      valor: valor
    });

    console.log(Produto.produtos);

    return 'Produto adicionado com sucesso';
  }

  static editar(indice, id, nome, valor) {
    if (Produto.produtos[indice]) {
      Produto.produtos[indice] = { id, nome, valor };
      return 'Produto editado com sucesso';
    }
    return 'Produto não encontrado';
  }

  // http://127.0.0.1:3000/produtos?indice=id
  static excluir(indice) {
    if (Produto.produtos[indice]) {
      Produto.produtos.splice(indice, 1);
      return 'Produto excluído com sucesso';
    }
    return 'Produto não encontrado';
  }
}

module.exports = Produto;
