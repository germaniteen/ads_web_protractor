
var chai               = require('chai'),
    chaiAsPromised     = require('chai-as-promised'),
    expect             = chai.expect;


chai.use(chaiAsPromised);

var NewAdPage = require('../../pages/newadpage.js'),
    newAdPage   = new NewAdPage();

var steps = function() {

    this.When(/^I have new ad info$/, function(callback) {
        $adInfo = newAdPage.generateNewAdInfo();
        callback();
    });

    this.When(/^I input the ad name$/, function(callback) {
        newAdPage
            .inputAdName($adInfo.ad_name)
            .then(callback);
    });

    this.When(/^I input the address$/, function(callback) {
        newAdPage
            .inputAddress($adInfo.address)
            .then(callback);
    });

    this.When(/^I input the rooms$/, function(callback) {
        newAdPage
            .inputRooms($adInfo.rooms)
            .then(callback);
    });

    this.When(/^I input the price$/, function(callback) {
        newAdPage
            .inputPrice($adInfo.price)
            .then(callback);
    });

    this.When(/^I click save button to save the form$/, function(callback) {
        newAdPage
            .clickSaveBtn()
            .then(callback);
    });


};
module.exports = steps;