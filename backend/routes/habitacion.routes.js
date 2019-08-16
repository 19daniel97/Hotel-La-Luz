const express = require('express');
const router = express.Router();

const habitacion = require('../controllers/habitacion.controller');

router.get('/', habitacion.getHabitaciones);
router.post('/', habitacion.createHabitacion);
router.get('/:id', habitacion.getHabitacion);
router.put('/:id', habitacion.editHabitacion);
router.delete('/:id', habitacion.deleteHabitacion);

module.exports = router;