const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbServices');

const Usuario = sequelize.define('Usuario', {
	Id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	Nombre: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Apellidos: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Usuario: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	Contrasena: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Status: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
}, {
	tableName: 'usuarios',
	timestamps: false
});

module.exports = Usuario;
