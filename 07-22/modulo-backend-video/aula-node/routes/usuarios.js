class Usuarios {

  static lista = [
    {
      id: 1,
      nome: 'João',
      login: 'joao'
    }
  ];
  
  static listar() {
    return Usuarios.lista;
  }

  static adicionar(id, nome, login) {
    Usuarios.lista.push({
      id: id,
      nome: nome,
      login: login
    })
  }

  static editar(indice) {

  }

  static excluir(indice) {
    Usuarios.lista.splice(indice, 1);
  }
 }

module.exports = Usuarios

// CRUD
// C - CREATE
// R - READ
// U - UPDATE
// D - DELETE