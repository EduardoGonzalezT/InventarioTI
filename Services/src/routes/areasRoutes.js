const express = require('express');
const router = express.Router();
const areasController = require('../controllers/areasController');
const isAuthenticated = require('../middlewares/authMiddleware');

router.get('/all', isAuthenticated, areasController.getAreas);

module.exports = router;