const { assetsData } = require('../data');

const getAllAssets = () => assetsData;

const getAssetsByTicker = (ticker) => {
  const assets = getAllAssets();

  if (!ticker) return assets;

  const assetFound = assets.filter(
    (stock) => stock.codAtivo.toUpperCase() === ticker.toUpperCase(),
  );

  if (!assetFound) return assets;

  return assetFound;
};

module.exports = { getAllAssets, getAssetsByTicker };
