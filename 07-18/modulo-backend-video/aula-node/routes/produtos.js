const produtos = [
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

function listarProdutos() {
  return produtos;
}

function adicionarProduto() {
  produtos.push(
    {
      id: 3,
      nome: 'Monitor 34p',
      valor: 3330.00
    }
  );

  return ('Produto adicionado com sucesso')
}

function editarProduto() {
  produtos[0].nome = 'Mouse sem fio';

  return ('Produto editado com sucesso')
}

function removerProduto() {
  produtos.pop();

  return ('Produto removido com sucesso')

}

module.exports = { listarProdutos, adicionarProduto, editarProduto, removerProduto };