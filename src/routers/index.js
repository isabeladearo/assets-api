const express = require('express');
const assetsRouter = require('./assets.router');

const router = express.Router();

router.use('/assets', assetsRouter);

module.exports = router;
