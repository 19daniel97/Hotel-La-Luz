const express = require('express');
const router = express.Router();

const atraccion = require('../controllers/atraccion.controller');

router.get('/', atraccion.getAtracciones);
router.post('/', atraccion.createAtraccion);
router.get('/:id', atraccion.getAtraccion);
router.put('/:id', atraccion.editAtraccion);
router.delete('/:id', atraccion.deleteAtraccion);

module.exports = router;