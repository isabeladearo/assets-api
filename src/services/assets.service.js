const { assetsData } = require('../data');

const getAllAssets = () => assetsData;

const getAssetsById = (id) => {
  const assets = getAllAssets();

  const assetFound = assets.find(
    (asset) => asset.codAtivo === Number(id),
  );

  return assetFound;
};

module.exports = { getAllAssets, getAssetsById };
