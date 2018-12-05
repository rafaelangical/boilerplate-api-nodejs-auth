const express = require('express');
const router = express.Router();
const apostinaController = require('../app/api/controllers/apostilas');

router.get('/', apostinaController.getAll);
router.post('/', apostinaController.create);
router.get('/:apostinaId', apostinaController.getById);
router.put('/:apostinaId', apostinaController.updateById);
router.delete('/:apostinaId', apostinaController.deleteById);

module.exports = router;