const express = require('express');
const { assetsController } = require('../controllers');

const router = express.Router();

router.get('/search', assetsController.getAssetsByTicker);

router.get('/', assetsController.getAllAssets);

module.exports = router;
