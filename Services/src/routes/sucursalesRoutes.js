const express = require('express');
const router = express.Router();
const sucursalController = require('../controllers/sucursalesController');
const isAuthenticated = require('../middlewares/authMiddleware');

router.get('/all', isAuthenticated, sucursalController.getSucursales);

module.exports = router;