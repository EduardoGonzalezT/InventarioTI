const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbServices');
const Clave = require('./claves');
const Area = require('./areas');
const Sucursal = require('./sucursales');

const Equipo = sequelize.define('Equipo', {
	Id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	Nombre: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Codigo: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	Clave: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	Area: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	Sucursal: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	Status: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	Descripcion: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Registro: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	tableName: 'equipos',
	timestamps: false
});

Equipo.belongsTo(Clave, { foreignKey: 'Clave', as: 'clave' });
Equipo.belongsTo(Area, { foreignKey: 'Area', as: 'area' });
Equipo.belongsTo(Sucursal, { foreignKey: 'Sucursal', as: 'sucursal' });

module.exports = Equipo;