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
    })
  }

  static editar(indice) {

  }

  static excluir(indice) {
    Produto.produtos.splice(indice, 1);
  }
 }

module.exports = Produto

// CRUD
// C - CREATE
// R - READ
// U - UPDATE
// D - DELETE