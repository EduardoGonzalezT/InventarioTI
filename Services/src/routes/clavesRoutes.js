const express = require('express');
const router = express.Router();
const claveController = require('../controllers/clavesController');
const isAuthenticated = require('../middlewares/authMiddleware');

router.get('/all', isAuthenticated, claveController.getClaves);

module.exports = router;