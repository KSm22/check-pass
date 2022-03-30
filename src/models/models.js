const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Password = sequelize.define('password', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    password: {type: DataTypes.STRING}
}, {timestamps: false, createdAt: false, updatedAt: false});


const Top = sequelize.define('top', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
}, {timestamps: false, createdAt: false, updatedAt: false});


module.exports = {
    Password,
    Top
}