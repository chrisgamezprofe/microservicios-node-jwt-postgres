const express = require('express');

const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.post('/usuario/register', usuarioController.add);
router.post('/usuario/login', usuarioController.login);


module.exports = router;
