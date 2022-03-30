const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    "check_pass",
    "root",
    "123qwe",
    {
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)