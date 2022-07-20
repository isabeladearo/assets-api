const { StatusCodes } = require('http-status-codes');
const { assetsService } = require('../services');

const getAllAssets = async (_req, res) => {
  const assets = await assetsService.getAllAssets();
  return res.status(StatusCodes.OK).json(assets);
};

const getAssetsByTicker = async (req, res) => {
  const { ticker } = req.query;

  const asset = await assetsService.getAssetsByTicker(ticker);

  return res.status(StatusCodes.OK).json(asset);
};

module.exports = { getAllAssets, getAssetsByTicker };
