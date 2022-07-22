const express = require('express');
const { assetsController } = require('../controllers');

const router = express.Router();

router.get('/:id', assetsController.getAssetsById);

router.get('/', assetsController.getAllAssets);

module.exports = router;
