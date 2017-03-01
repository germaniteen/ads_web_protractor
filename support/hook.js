module.exports = function() {

//maximize browser and pass the url
    this.Before(function(scenario, callback) {
        browser.manage().window().maximize();
        browser.get(browser.params.env.hostname);
        callback();
    });

// Take screenshot if scenario fails
    this.After(function (scenario, callback) {
        if (scenario.isFailed()) {
            browser.takeScreenshot().then(function (base64png) {
                var decodedImage = new Buffer(base64png, 'base64').toString('binary');
                scenario.attach(decodedImage, 'image/png');
                browser.close();
                callback();
            }, function (err) {
                callback(err);
            });
        } else {
            browser.close();
            callback();
        }
    });
}