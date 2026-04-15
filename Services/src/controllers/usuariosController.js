const User = require('../models/usuarios');

exports.getUsuarios = async (req, res) => {
	const usuarios = await User.findAll();
	res.json(usuarios);
};

exports.createUsuario = async (req, res) => {
	const { Nombre, Apellidos, Usuario, Contrasena, Status } = req.body;
	try {
		const usuario = await User.create({ Nombre, Apellidos, Usuario, Contrasena, Status });
		res.json(usuario);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getUsuarioById = async (req, res) => {
	const { id } = req.params;
	const usuario = await User.findByPk(id);
	if (!usuario) {
		return res.status(404).json({ message: 'Usuario no encontrado' });
	}
	res.json(usuario);
};

exports.loginUsuario = async (req, res) => {
	const { Usuario, Contrasena } = req.body;
	const usuario = await User.findOne({ where: { Usuario, Contrasena } });
	if (!usuario) {
		return res.status(404).json({ message: 'Usuario no encontrado' });
	}
	req.session.user = {
		Id: usuario.Id,
		Nombre: usuario.Nombre,
		Apellidos: usuario.Apellidos,
		Usuario: usuario.Usuario,
		Status: usuario.Status
	};

	res.json({ message: 'Login exitoso', usuario });
};

exports.logoutUsuario = (req, res) => {
	req.session.destroy(err => {
		if (err) {
			return res.status(500).json({ message: 'Error al cerrar sesión' });
		}
		res.clearCookie('connect.sid');
		res.json({ message: 'Logout exitoso' });
	});
};

exports.updateUsuario = async (req, res) => {
	const { id } = req.params;
	const { Nombre, Usuario, Contrasena, Status } = req.body;

	try {
		const [updated] = await User.update(
			{ Nombre, Usuario, Contrasena, Status },
			{ where: { Id: id } }
		);

		if (updated === 0) {
			return res.status(404).json({ message: "Usuario no encontrado" });
		}

		const usuarioActualizado = await User.findByPk(id);

		res.json({
			message: "Usuario actualizado correctamente",
			usuario: usuarioActualizado,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.deleteUsuario = async (req, res) => {
	const { Id } = req.params;
	try {
		const usuario = await User.destroy({ where: { Id } });
		if (!usuario) {
			return res.status(404).json({ message: 'Usuario no encontrado' });
		}
		res.json({ message: 'Usuario eliminado correctamente' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.me = async (req, res) => {
	console.log("Sesión actual:", req.session);
	if (!req.session.user) {
		return res.status(403).json({ message: 'No autenticado' });
	}
	res.json(req.session.user);
};