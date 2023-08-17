const uuid = require('uuid');

const customResponse = require('../utils/constants');

class UsuarioService {
  constructor(usuarioRepo) {
    this.usuarioRepo = usuarioRepo;
  }

  async add(req) {
    const { name } = req.body;
    const { password } = req.body;
    const { email } = req.body;

    const response = {};

    if (!name || !password || !email) {
      response.message = customResponse.reqValidationError.message;
      response.statusCode = customResponse.reqValidationError.statusCode;
      return response;
    }

      const existe = await this.usuarioRepo.existe(email);
      if (existe) {
        response.message = "Ya existe un usuario con el correo " + email;
        response.statusCode = customResponse.reqValidationError.statusCode;
        return response;
      }
      
    const usuario = await this.usuarioRepo.add(name, password, email);

    if (!usuario) {
      response.message = customResponse.serverError.message;
      response.statusCode = customResponse.serverError.statusCode;
      return response;
    }
    delete usuario.password; 
    response.message = customResponse.reqCreated.message;
    response.statusCode = customResponse.reqCreated.statusCode;
    response.data = usuario;

    return response;
  }

  async login(req) {
    const { password } = req.body;
    const { email } = req.body;

    const response = {};

    const usuario = await this.usuarioRepo.login(password, email);

    if (!usuario) {
      response.message = customResponse.recordNotFound.message;
      response.statusCode = customResponse.recordNotFound.statusCode;
      return response;
    }
    response.message = customResponse.success.message;
    response.statusCode = customResponse.success.statusCode;
    response.data = usuario;

    return response;
  }

 
}

module.exports = {
    UsuarioService,
};