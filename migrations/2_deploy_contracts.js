var NFTMarketplace = artifacts.require("NFTMarketplace");
var NFTCollection = artifacts.require("NFTCollection");

module.exports = function (deployer) {
  deployer.deploy(NFTMarketplace);
  deployer.deploy(NFTCollection);
};
