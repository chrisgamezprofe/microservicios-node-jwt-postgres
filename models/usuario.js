const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

//esquema
const UsuarioSchema = sequelize.define('usuario', {
    id: {
      type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      }
});

module.exports=UsuarioSchema;