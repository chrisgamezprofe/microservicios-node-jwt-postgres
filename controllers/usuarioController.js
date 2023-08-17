const { UsuarioService } = require('../services/usuarioService');
const { UsuarioRepository} = require('../repository/usuario');

const UsuarioModel = require('../models/usuario');


const usuarioRepository = new UsuarioRepository(UsuarioModel);
const usuarioService = new UsuarioService(usuarioRepository);

exports.add = async (req, res, next) => {
  try {
      const response = await usuarioService.add(req);
        res.statusCode = response.statusCode;

        return res.json({message: response.message, data: response.data});
    } catch (error) {
        next (error);
    }
};


exports.login = async (req, res, next) => {
    try {
        const response = await usuarioService.login(req);
        res.statusCode = response.statusCode;

        return res.json({message: response.message, data: response.data});
    } catch (error) {
        next (error);
    }
};


