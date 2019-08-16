const express = require('express');
const router = express.Router();

const forpago = require('../controllers/forpago.controller');

router.get('/', forpago.getForpagos);
router.post('/', forpago.createForpago);
router.get('/:id', forpago.getForpago);
router.put('/:id', forpago.editForpago);
router.delete('/:id', forpago.deleteForpago);

module.exports = router;