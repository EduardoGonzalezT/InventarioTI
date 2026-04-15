const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbServices');

const Sucursal = sequelize.define('Sucursal', {
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
	tableName: 'sucursales',
	timestamps: false
});

module.exports = Sucursal;