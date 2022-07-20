const express = require('express');
const { inventoryController } = require('../controllers');

const router = express.Router();

router.get('/', inventoryController.getAllInventory);

module.exports = router;
