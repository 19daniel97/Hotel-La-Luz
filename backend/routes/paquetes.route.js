const express = require('express');
const router = express.Router();

const paquete = require('../controllers/paquetes.controller');

router.get('/', paquete.getPaquetes);
router.post('/', paquete.createPaquete);
router.get('/:id', paquete.getPaquete);
router.put('/:id', paquete.editPaquete);
router.delete('/:id', paquete.deletePaquete);

module.exports = router;