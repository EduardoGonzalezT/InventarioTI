const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbServices');
const Equipo = require('./equipos');

const InformacionEquipo = sequelize.define('InformacionEquipo', {
	Id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	SO: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Mac: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Ip: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Componentes: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	Usuario: {
		type: DataTypes.STRING,
		allowNull: false
	},
	IdEquipo: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique: true
	}
}, {
	tableName: 'informacion_equipo',
	timestamps: false
});

InformacionEquipo.belongsTo(Equipo, { foreignKey: 'IdEquipo', as: 'equipo' });

module.exports = InformacionEquipo;