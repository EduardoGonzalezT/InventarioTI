const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbServices');

const Clave = sequelize.define('Clave', {
	Id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	Siglas: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Descripcion: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	tableName: 'claves',
	timestamps: false
});

module.exports = Clave;