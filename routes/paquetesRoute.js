const express = require('express');

const router = express.Router();

const paqueteController = require('../controllers/paqueteController');

router.post('/paquete/add', paqueteController.addPaquete);
router.get('/paquetes', paqueteController.getAllPaquetes);
router.get('/paquete/:uuid', paqueteController.getPaqueteById);
router.put('/paquete/:uuid', paqueteController.updatePaqueteById);
router.delete('/paquete/:uuid', paqueteController.deletePaqueteById);


module.exports = router;
