const Areas = require('../models/areas');

exports.getAreas = async (req, res) => {
	try {
		const areas = await Areas.findAll({ raw: true });
		const formatted = areas.map(a => ({
			label: a.Area,
			value: String(a.Id)
		}));
		res.json(formatted);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error al obtener areas' });
	}
}