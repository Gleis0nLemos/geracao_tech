const produto = require("./produtos");
const usuarios = require('./usuarios')

const rotas = {
  '/produtos': {
    'GET': produto.listar(),
    'POST': produto.adicionar(),
    'PUT': produto.editar(0),
    'DELETE': produto.excluir(0),
  },
  '/usuarios': {
    'GET': usuarios.listar(),
    'POST': usuarios.adicionar(),
    'PUT': usuarios.editar(0),
    'DELETE': usuarios.excluir(0),
  },

};

module.exports = rotas;