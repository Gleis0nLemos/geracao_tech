const Usuario = require('../models/usuarioModel');  

class UsuarioController {  
    static listar(req, res) {  
        res.status(200).json(Usuario.listar());  
    }  

    static consultarPorId(req, res) {  
        const id = req.params.id;  
        const usuario = Usuario.consultarPorId(id);  
        if (usuario) {  
            res.status(200).json(usuario);  
        } else {  
            res.status(404).json({ message: 'Usuário não encontrado' });  
        }  
    }  

    static criar(req, res) {  
        const novoUsuario = req.body;  
        Usuario.criar(novoUsuario);  
        res.status(201).json({ message: 'Usuário criado com sucesso' });  
    }  

    static atualizar(req, res) {  
        const id = req.params.id;  
        const dadosAtualizados = req.body;  
        const usuarioAtualizado = Usuario.atualizar(id, dadosAtualizados);  
        res.status(200).json({ message: 'Usuário atualizado com sucesso' });  
    }  

    static excluir(req, res) {  
        const id = req.params.id;  
        Usuario.excluir(id);  
        res.status(200).json({ message: 'Usuário excluído com sucesso' });  
    }  
}  

module.exports = UsuarioController;