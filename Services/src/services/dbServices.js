const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const sequialize = new Sequelize(
	dbConfig.database,
	dbConfig.user,
	dbConfig.password,
	{
		host: dbConfig.host,
		dialect: dbConfig.dialect
	}
);

module.exports = sequialize;