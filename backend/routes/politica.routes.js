const express = require('express');
const router = express.Router();

const politica = require('../controllers/politica.controller');

router.get('/', politica.getPoliticas);
router.post('/', politica.createPolitica);
router.get('/:id', politica.getPolitica);
router.put('/:id', politica.editPolitica);
router.delete('/:id', politica.deletePolitica);

module.exports = router;