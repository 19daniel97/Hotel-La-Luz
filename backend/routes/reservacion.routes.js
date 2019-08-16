const express = require('express');
const router = express.Router();

const reservacion = require('../controllers/reservacion.controller');

router.get('/', reservacion.getReservaciones);
router.post('/', reservacion.createReservacion);
router.get('/:id', reservacion.getReservacion);
router.put('/:id', reservacion.editReservacion);
router.delete('/:id', reservacion.deleteReservacion);

module.exports = router;