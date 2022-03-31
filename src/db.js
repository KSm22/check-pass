const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    "check-pass",
    "kirill",
    "123qwe",
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)