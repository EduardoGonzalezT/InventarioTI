const express = require('express');
const router = express.Router();
const userController = require('../controllers/usuariosController');
const isAuthenticated = require('../middlewares/authMiddleware');
const validateUsuario = require('../middlewares/userMiddleware');

router.get('/all', isAuthenticated, userController.getUsuarios);
router.post('/create', validateUsuario, userController.createUsuario);

router.get('/me', isAuthenticated, userController.me);
router.post('/logout', isAuthenticated, userController.logoutUsuario);
router.post('/login', userController.loginUsuario);

router.get('/:id', isAuthenticated, userController.getUsuarioById);
router.put('/:id', validateUsuario, userController.updateUsuario);
router.delete('/:id', isAuthenticated, userController.deleteUsuario);

module.exports = router;