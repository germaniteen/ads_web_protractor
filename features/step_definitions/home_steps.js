
var chai               = require('chai'),
    chaiAsPromised     = require('chai-as-promised'),
    expect             = chai.expect;

chai.use(chaiAsPromised);

var HomePage = require('../../pages/homepage.js'),
    homePage   = new HomePage();

var steps = function() {
    this.Given(/^I visit the homepage$/, function(callback) {
        browser
            .get(browser.params.env.hostname)
            .then(callback);
    });

    this.When(/^I click on the Add button$/, function (callback) {

        homePage
            .clickAddButton()
            .then(callback);
    });

    this.When(/^I have the current items$/, function (callback) {
         homePage.countRows()
            .then(function (rows) {
                $noRows = rows;
            }).then(callback);

    });

    this.Then(/^The new ad is added$/, function (callback) {
        $expectedRows = homePage.countRows();
        rows = parseInt($noRows) + 1;
        expect($expectedRows).to.eventually.eql(rows).and.notify(callback);
    });

};
module.exports = steps;