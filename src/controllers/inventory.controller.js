const { StatusCodes } = require('http-status-codes');
const { inventoryService } = require('../services');

const getAllInventory = async (_req, res) => {
  const inventory = await inventoryService.getAllInventory();
  return res.status(StatusCodes.OK).json(inventory);
};

module.exports = { getAllInventory };
