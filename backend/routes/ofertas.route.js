const express = require('express');
const router = express.Router();

const oferta = require('../controllers/ofertas.controller');

router.get('/', oferta.getOfertas);
router.post('/', oferta.createOferta);
router.get('/:id', oferta.getOferta);
router.put('/:id', oferta.editOferta);
router.delete('/:id', oferta.deleteOferta);

module.exports = router;