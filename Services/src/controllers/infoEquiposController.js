const InfoEquipo = require('../models/infoEquipos');
const Equipo = require('../models/equipos');

exports.getInfo = async (req, res) => {
	try {
		const { id } = req.params;
		const infoEquipo = await InfoEquipo.findAll({
			where: {
				IdEquipo: id
			},
			include: [
				{ model: Equipo, as: 'equipo' }
			],
			raw: true
		});
		res.json(infoEquipo);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error al obtener información del equipo' });
	}
}

exports.createOrUpdateGeneral = async (req, res) => {
	try {
		const { id } = req.params; // aquí id es el IdEquipo
		const { SO, Mac, Ip, Usuario } = req.body;

		// Intentar actualizar por IdEquipo
		const [rowsUpdated] = await InfoEquipo.update(
			{ SO, Mac, Ip, Usuario },
			{ where: { IdEquipo: id } }
		);

		let infoGeneral;
		if (rowsUpdated === 0) {
			// si no existía, lo creamos
			infoGeneral = await InfoEquipo.create({ IdEquipo: id, SO, Mac, Ip, Usuario });
			return res.json({ action: "created", data: infoGeneral });
		} else {
			// si se actualizó, lo buscamos para devolverlo
			infoGeneral = await InfoEquipo.findOne({ where: { IdEquipo: id } });
			return res.json({ action: "updated", data: infoGeneral });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al crear/actualizar información del equipo" });
	}

};

exports.createOrUpdateComponents = async (req, res) => {
	try {
		const { id } = req.params; // aquí id es el IdEquipo
		const { Componentes } = req.body;

		// Intentar actualizar por IdEquipo
		const [rowsUpdated] = await InfoEquipo.update(
			{ Componentes },
			{ where: { IdEquipo: id } }
		);

		let infoGeneral;
		if (rowsUpdated === 0) {
			// si no existía, lo creamos
			infoGeneral = await InfoEquipo.create({ IdEquipo: id, Componentes });
			return res.json({ action: "created", data: infoGeneral });
		} else {
			// si se actualizó, lo buscamos para devolverlo
			infoGeneral = await InfoEquipo.findOne({ where: { IdEquipo: id } });
			return res.json({ action: "updated", data: infoGeneral });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al crear/actualizar información del equipo" });
	}
}
