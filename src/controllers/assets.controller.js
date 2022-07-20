const { StatusCodes } = require('http-status-codes');
const { assetsService } = require('../services');

const getAllAssets = async (_req, res) => {
  const assets = await assetsService.getAllAssets();
  return res.status(StatusCodes.OK).json(assets);
};

module.exports = { getAllAssets };
