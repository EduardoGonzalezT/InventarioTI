const express = require('express');
const router = express.Router();
const infoEquiposController = require('../controllers/infoEquiposController');
const isAuthenticated = require('../middlewares/authMiddleware');

router.get('/getInfo/:id', isAuthenticated, infoEquiposController.getInfo);
router.post('/createOrUpdateGeneral/:id', isAuthenticated, infoEquiposController.createOrUpdateGeneral);
router.post('/createOrUpdateComponents/:id', isAuthenticated, infoEquiposController.createOrUpdateComponents);

module.exports = router;