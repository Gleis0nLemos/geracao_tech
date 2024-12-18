class UsersModel {

  static lista = [
    {
      "nome": "João",
      "login": "joao"
    }
  ]

  static listar() {
    
    return UsersModel.lista;
  }

  static consultarPorId() {
    
  }

  static criar(data) {
    UsersModel.lista.push(data)
  }

  static atualizar() {
    
  }

  static deletar() {
    
  }
}

module.exports = UsersModel
