var Election = artifacts.require("Election");

module.exports = function(deployer) {
  deployer.deploy(Election,10,"0x2B0CdF654b895cf47E2C3F1afa7Edd40fe4Babec","AP");
};

