const express = require('express');
const router = express.Router();

const homeController = require('./homeController');

router.get('/', homeController.get);
router.post('/', homeController.post);
router.delete('/', homeController.delete);
router.put('/', homeController.put);

module.exports = router;
