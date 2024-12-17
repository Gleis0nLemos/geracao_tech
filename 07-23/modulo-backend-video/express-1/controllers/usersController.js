const usersModel = require('../models/usersModel')

class usersController {
  
  listar() {
    const usersModel = new usersModel()

    return usersModel.listar()
  }

  consultarPorId() {
    const usersModel = new usersModel()

    return usersModel.listar()
  }

  criar() {
    const usersModel = new usersModel()

    return usersModel.criar()
  }

  atualizar() {
    const usersModel = new usersModel()

    return usersModel.atualizar()
  }

  deletar() {
    const usersModel = new usersModel()

    return usersModel.deletar()
  }
}

module.exports = usersController