const Sequelize = require('sequelize');

//conexion
const sequelize = new Sequelize(process.env.POSTGRE_URI, {
    dialect: 'postgres'
});
sequelize.sync();
//sequelize.sync({ force: true })
module.exports = sequelize