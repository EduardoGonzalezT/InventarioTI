const Cve = require('../models/claves');

exports.getClaves = async (req, res) => {
	try {
		const claves = await Cve.findAll({ raw: true });
		const formatted = claves.map(c => ({
			label: c.Siglas + " - " + c.Descripcion,
			value: String(c.Id)
		}));
		res.json(formatted);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error al obtener claves' });
	}
};