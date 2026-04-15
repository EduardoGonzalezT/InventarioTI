const express = require('express');
const router = express.Router();
const usuariosRoutes = require('./usuariosRoutes');
const sucursalesRoutes = require('./sucursalesRoutes');
const clavesRoutes = require('./clavesRoutes');
const areasRoutes = require('./areasRoutes');
const equiposRoutes = require('./equiposRoutes');
const infoEquiposRoutes = require('./infoEquiposRoutes');

router.use('/usuarios', usuariosRoutes);
router.use('/sucursales', sucursalesRoutes);
router.use('/claves', clavesRoutes);
router.use('/areas', areasRoutes);
router.use('/equipos', equiposRoutes);
router.use('/infoEquipos', infoEquiposRoutes);

module.exports = router;