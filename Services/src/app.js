const express = require('express');
const cors = require('cors');
const session = require('express-session');
const sequalize = require('./services/dbServices');
const routes = require('./routes/routes');
const app = express();
const logger = require('./middlewares/loginMiddleware');

const corsOptions = {
	origin: 'http://localhost:5173',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	allowedHeaders: ['Content-Type', 'Authorization'],
	credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(session({
	secret: 'secret-key',
	resave: false,
	saveUninitialized: false,
	cookie: {
		httpOnly: true,
		sameSite: 'lax',
		secure: false
	}
}));
app.use(logger);
app.use('/api/v1', routes);

app.get('/', (req, res) => {
	res.send('Servidor Express funcionando 🚀');
});

sequalize.sync().then(() => {
	console.log('Base de datos sincronizada');
}).catch(error => {
	console.log(error);
});

module.exports = app;