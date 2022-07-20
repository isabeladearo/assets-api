const express = require('express');
const assetsRouter = require('./assets.router');
const inventoryRouter = require('./inventory.router');

const router = express.Router();

router.use('/assets', assetsRouter);

router.use('/inventory', inventoryRouter);

module.exports = router;
