var Homepage = function() {
    this.selectors = {
        'ADD_BUTTON': '.al-add__button',
        'ADS_LIST': '.md-table.ng-isolate-scope',
        'ROWS': 'tr[ng-click="$ctrl.rowClick(advertisement)"]'
    };

    this.addButton = browser.$(this.selectors.ADD_BUTTON);
    this.adsList = browser.$(this.selectors.ADS_LIST);
    this.rows = element.all(by.css(this.selectors.ROWS));
};

Homepage.prototype.clickAddButton = function() {
    return this.addButton.click();
};

Homepage.prototype.countRows = function() {
    return this.rows.count();
};

module.exports = Homepage;