const config = require('./env');

module.exports = {
	host: config.db.host,
	user: config.db.user,
	password: config.db.password,
	database: config.db.database,
	dialect: 'mysql',
}