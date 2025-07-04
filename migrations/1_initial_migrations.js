var Migrations = artifacts.require("./Migrate");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
