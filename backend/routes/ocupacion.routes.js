const express = require('express');
const router = express.Router();

const ocupacion = require('../controllers/ocupacion.controller');

router.get('/', ocupacion.getOcupaciones);
router.post('/', ocupacion.createOcupacion);
router.get('/:id', ocupacion.getOcupacion);
router.put('/:id', ocupacion.editOcupacion);
router.delete('/:id', ocupacion.deleteOcupacion);
//router.post('/', ocupacion.verifyOcupacion);


module.exports = router;