var NewAddPage = function() {
    this.selectors = {
        'AD_NAME': "input[ng-model='$ctrl.advertisement.name']",
        'PRICE': "input[ng-model='$ctrl.advertisement.price']",
        'SAVE_BTN': "button[ng-click='$ctrl.saveAdvertisementDetails()']"
    };

    this.adName = browser.$(this.selectors.AD_NAME);
    this.price = browser.$(this.selectors.PRICE);
    this.saveBtn = browser.$(this.selectors.SAVE_BTN);
};

NewAddPage.prototype.inputAdName = function(adName) {
    return this.adName.sendKeys(adName);
};

NewAddPage.prototype.inputPrice = function(price) {
    return this.price.sendKeys(price);
};

NewAddPage.prototype.clickSaveBtn = function() {
    return this.saveBtn.click();
};

module.exports = NewAddPage;