const UsersModel = require('../models/usersModel')

class UsersController {
  
  listar(req, res) {
    const dados = UsersModel.listar()

    return res.status(200).json(dados)
  }

  consultarPorId(req, res) {

    return UsersModel.consultarPorId()
  }

  criar(req, res) {
    const body = req.body
    UsersModel.criar(body)

    return res.status(200).json({
      message: 'Usuário criado com sucesso'
    })
  }

  atualizar(req, res) {

    return UsersModel.atualizar()
  }

  deletar(req, res) {

    return UsersModel.deletar()
  }
}

module.exports = UsersController