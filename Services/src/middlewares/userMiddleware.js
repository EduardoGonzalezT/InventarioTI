function validateUsuario(req, res, next) {
	const { Nombre, Apellidos, Usuario, Contrasena, Status } = req.body;
	if (!Nombre || !Apellidos || !Usuario || !Contrasena || !Status) {
		return res.status(400).json({ message: 'Todos los campos son obligatorios' });
	}
	if (typeof Nombre !== 'string' || typeof Apellidos !== 'string' || typeof Usuario !== 'string' || typeof Contrasena !== 'string' || typeof Status !== 'number') {
		return res.status(400).json({ message: 'Todos los campos deben ser del tipo correcto' });
	}
	next();
}

module.exports = validateUsuario;