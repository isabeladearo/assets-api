const { StatusCodes } = require('http-status-codes');
const { assetsService } = require('../services');

const getAllAssets = async (_req, res) => {
  const assets = await assetsService.getAllAssets();
  return res.status(StatusCodes.OK).json(assets);
};

const getAssetsById = async (req, res) => {
  const asset = await assetsService.getAssetsById(req.params.id);

  return res.status(StatusCodes.OK).json(asset);
};

module.exports = { getAllAssets, getAssetsById };
