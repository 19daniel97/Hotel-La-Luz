const express = require('express');
const router = express.Router();

const tipohab = require('../controllers/tipohab.controller');

router.get('/', tipohab.getTiposhab);
router.post('/', tipohab.createTipohab);
router.get('/:id', tipohab.getTipohab);
router.put('/:id', tipohab.editTipohab);
router.delete('/:id', tipohab.deleteTipohab);

module.exports = router;