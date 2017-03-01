var Faker = require('faker');

var NewAddPage = function () {
    this.selectors = {
        'AD_NAME': "input[ng-model='$ctrl.advertisement.name']",
        'PRICE': "input[ng-model='$ctrl.advertisement.price']",
        'ADDRESS': "input[ng-model='$ctrl.advertisement.street']",
        'ROOMS': "input[ng-model='$ctrl.advertisement.rooms']",
        'SAVE_BTN': "button[ng-click='$ctrl.saveAdvertisementDetails()']"
    };

    this.adName = browser.$(this.selectors.AD_NAME);
    this.address = browser.$(this.selectors.ADDRESS);
    this.rooms = browser.$(this.selectors.ROOMS);
    this.price = browser.$(this.selectors.PRICE);
    this.saveBtn = browser.$(this.selectors.SAVE_BTN);
    this.adInfo = {
        'ad_name': Faker.Name.firstNameMale(),
        'address': Faker.Address.streetAddress(),
        'rooms': '3',
        'price': '25',
    };
};

NewAddPage.prototype.inputAdName = function (adName) {
    return this.adName.sendKeys(adName);
};

NewAddPage.prototype.inputAddress = function (address) {
    return this.address.sendKeys(address);
};

NewAddPage.prototype.inputRooms = function (rooms) {
    return this.rooms.sendKeys(rooms);
};

NewAddPage.prototype.inputPrice = function (price) {
    return this.price.sendKeys(price);
};

NewAddPage.prototype.clickSaveBtn = function () {
    return this.saveBtn.click();
};

NewAddPage.prototype.generateNewAdInfo = function () {
    return this.adInfo;
};

module.exports = NewAddPage;