const express = require('express');
const router = express.Router();
const equiposController = require('../controllers/equiposController');
const isAuthenticated = require('../middlewares/authMiddleware');

router.post('/createOrUpdate/', isAuthenticated, equiposController.createOrUpdateEquipo);
router.post('/createOrUpdate/:id', isAuthenticated, equiposController.createOrUpdateEquipo);
router.get('/getComputadoras', isAuthenticated, equiposController.getComputadoras);
router.get('/getImpresoras', isAuthenticated, equiposController.getImpresoras);
router.get('/getTelefonos', isAuthenticated, equiposController.getTelefonos);
router.get('/getGrabadoras', isAuthenticated, equiposController.getGrabadoras);
router.get('/getServidores', isAuthenticated, equiposController.getServidores);
router.get('/getSmartPhones', isAuthenticated, equiposController.getSmartPhones);
router.get('/getPantallas', isAuthenticated, equiposController.getPantallas);
router.get('/getTablets', isAuthenticated, equiposController.getTablets);
router.get('/getEquipoDetalles/:id', isAuthenticated, equiposController.getEquipoDetalles);
router.put('/updateStatus/:id', isAuthenticated, equiposController.updateStatus);

module.exports = router;