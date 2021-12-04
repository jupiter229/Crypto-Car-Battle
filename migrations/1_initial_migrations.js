const CarBattle = artifacts.require('CarBattle');

module.exports = function (deployer) {
    deployer.deploy(CarBattle);
}