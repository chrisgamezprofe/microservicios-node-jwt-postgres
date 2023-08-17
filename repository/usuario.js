const md5 = require('md5');
const jwt = require('jsonwebtoken');
class UsuarioRepository {
  constructor(usuarioModel) {
    this.usuarioModel = usuarioModel;
  }

  existe(email) {
    return this.usuarioModel
      .findOne({
        where: {
          email: email
        },
      })
      .then(function (u) {
        if (u) {
          return true
        } else {
          return false
        }
      });
  }

  add(name, password, email) {
      return this.usuarioModel.create({
        name,
        password: md5(password),
        email,
      });  
  }

  login(password, email) {
    return this.usuarioModel
      .findOne({
        where: {
          email: email,
          password: md5(password),
        },
      })
      .then(function (u) {
        if (u) {
          const usuario = { nombre: u.name, email: u.email, id: u.id };
          const token = jwt.sign(usuario, process.env.TOKEN_SECRET_KEY, { expiresIn: '1m' });
          return { ...usuario, token };
        }
      });
  }
}

module.exports = {
    UsuarioRepository,
};