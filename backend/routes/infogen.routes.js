const express = require('express');
const router = express.Router();

const infogen = require('../controllers/infogen.controller');

router.get('/', infogen.getInfogens);
router.post('/', infogen.createInfogen);
router.get('/:id', infogen.getInfogen);
router.put('/:id', infogen.editInfogen);
router.delete('/:id', infogen.deleteInfogen);

module.exports = router;