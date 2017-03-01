
var chai               = require('chai'),
    chaiAsPromised     = require('chai-as-promised'),
    expect             = chai.expect;

chai.use(chaiAsPromised);

var NewAdPage = require('../../pages/newadpage.js'),
    newAdPage   = new NewAdPage();

var steps = function() {
    this.When(/^I input the ad name$/, function(callback) {
        newAdPage
            .inputAdName('Hello')
            .then(callback);
    });

    this.When(/^I input the price$/, function(callback) {
        newAdPage
            .inputPrice('23')
            .then(callback);
    });

    this.When(/^I click save button to save the form$/, function(callback) {
        newAdPage
            .clickSaveBtn()
            .then(callback);
    });


};
module.exports = steps;