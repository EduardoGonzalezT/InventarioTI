const Equipo = require('../models/equipos');
const Clave = require('../models/claves');
const Area = require('../models/areas');
const Sucursal = require('../models/sucursales');

exports.createOrUpdateEquipo = async (req, res) => {
	try {
		const { id } = req.params;
		const { Nombre, Codigo, Clave, Area, Sucursal, Status, Descripcion, Registro } = req.body;

		let equipo;
		if (id) {
			// actualizar
			const [rowsUpdated] = await Equipo.update(
				{ Nombre, Codigo, Clave, Area, Sucursal, Status, Descripcion, Registro },
				{ where: { Id: id } }
			);

			if (rowsUpdated === 0) {
				equipo = await Equipo.create({ Nombre, Codigo, Clave, Area, Sucursal, Status, Descripcion, Registro });
				return res.json({ action: "created", data: equipo });
			} else {
				equipo = await Equipo.findOne({ where: { Id: id } });
				return res.json({ action: "updated", data: equipo });
			}
		} else {
			// crear nuevo
			equipo = await Equipo.create({ Nombre, Codigo, Clave, Area, Sucursal, Status, Descripcion, Registro });
			return res.json({ action: "created", data: equipo });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al crear/actualizar equipo" });
	}
};



exports.getComputadoras = async (req, res) => {
	try {
		const equipos = await Equipo.findAll({
			where: {
				Clave: 1
			},
			include: [
				{ model: Clave, as: 'clave' },
				{ model: Area, as: 'area' },
				{ model: Sucursal, as: 'sucursal' }
			],
			raw: true
		});
		res.json(equipos);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error al obtener equipos' });
	}
}

exports.getImpresoras = async (req, res) => {
	try {
		const equipos = await Equipo.findAll({
			where: {
				Clave: 2
			},
			include: [
				{ model: Clave, as: 'clave' },
				{ model: Area, as: 'area' },
				{ model: Sucursal, as: 'sucursal' }
			],
			raw: true
		});
		res.json(equipos);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error al obtener equipos' });
	}
}

exports.getTelefonos = async (req, res) => {
	try {
		const equipos = await Equipo.findAll({
			where: {
				Clave: 3
			},
			include: [
				{ model: Clave, as: 'clave' },
				{ model: Area, as: 'area' },
				{ model: Sucursal, as: 'sucursal' }
			],
			raw: true
		});
		res.json(equipos);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error al obtener equipos' });
	}
}

exports.getGrabadoras = async (req, res) => {
	try {
		const equipos = await Equipo.findAll({
			where: {
				Clave: 4
			},
			include: [
				{ model: Clave, as: 'clave' },
				{ model: Area, as: 'area' },
				{ model: Sucursal, as: 'sucursal' }
			],
			raw: true
		});
		res.json(equipos);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error al obtener equipos' });
	}
}

exports.getServidores = async (req, res) => {
	try {
		const equipos = await Equipo.findAll({
			where: {
				Clave: 5
			},
			include: [
				{ model: Clave, as: 'clave' },
				{ model: Area, as: 'area' },
				{ model: Sucursal, as: 'sucursal' }
			],
			raw: true
		});
		res.json(equipos);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error al obtener equipos' });
	}
}

exports.getSmartPhones = async (req, res) => {
	try {
		const equipos = await Equipo.findAll({
			where: {
				Clave: 6
			},
			include: [
				{ model: Clave, as: 'clave' },
				{ model: Area, as: 'area' },
				{ model: Sucursal, as: 'sucursal' }
			],
			raw: true
		});
		res.json(equipos);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error al obtener equipos' });
	}
}

exports.getPantallas = async (req, res) => {
	try {
		const equipos = await Equipo.findAll({
			where: {
				Clave: 7
			},
			include: [
				{ model: Clave, as: 'clave' },
				{ model: Area, as: 'area' },
				{ model: Sucursal, as: 'sucursal' }
			],
			raw: true
		});
		res.json(equipos);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error al obtener equipos' });
	}
}

exports.getTablets = async (req, res) => {
	try {
		const equipos = await Equipo.findAll({
			where: {
				Clave: 8
			},
			include: [
				{ model: Clave, as: 'clave' },
				{ model: Area, as: 'area' },
				{ model: Sucursal, as: 'sucursal' }
			],
			raw: true
		});
		res.json(equipos);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error al obtener equipos' });
	}
}

exports.getEquipoDetalles = async (req, res) => {
	try {
		const { id } = req.params;
		const equipo = await Equipo.findByPk(id, {
			include: [
				{ model: Clave, as: 'clave' },
				{ model: Area, as: 'area' },
				{ model: Sucursal, as: 'sucursal' }
			],
			raw: true
		});
		res.json(equipo);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error al obtener equipo' });
	}
}

exports.updateStatus = async (req, res) => {
	try {
		const { id } = req.params;
		const { Status } = req.body;
		const equipo = await Equipo.update(
			{ Status },
			{ where: { Id: id } }
		);
		res.json(equipo);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error al actualizar el estatus del equipo' });
	}
}