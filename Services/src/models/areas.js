const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbServices');

const Area = sequelize.define('Area', {
	Id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	Area: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	tableName: 'areas',
	timestamps: false
});

module.exports = Area;