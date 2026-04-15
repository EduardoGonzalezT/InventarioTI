const Suc = require('../models/sucursales');

exports.getSucursales = async (req, res) => {
	try {
		const sucursales = await Suc.findAll({ raw: true });
		const formatted = sucursales.map(s => ({
			label: s.Descripcion,
			value: s.Id
		}));
		res.json(formatted);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error al obtener sucursales' });
	}
};