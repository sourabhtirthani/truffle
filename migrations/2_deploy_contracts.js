const BITSICOIN = artifacts.require("BITSICOIN");

module.exports = function (deployer) {
  deployer.deploy(BITSICOIN);
};