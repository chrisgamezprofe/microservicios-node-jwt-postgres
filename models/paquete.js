const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const UsuarioSchema = require('./usuario')

//esquema
const PaqueteSchema = sequelize.define("paquete", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre_producto: {
    type: Sequelize.STRING,
  },
  codigo_seguimiento: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  compania_envio: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  direccion_envio: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fecha: {
    type: Sequelize.DATE,
  },
  estado: {
    type: Sequelize.STRING,
    defaultValue: "CREADO"
  },
});

PaqueteSchema.belongsTo(UsuarioSchema);
UsuarioSchema.hasMany(PaqueteSchema);

module.exports=PaqueteSchema;