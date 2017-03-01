exports.config = {

    allScriptsTimeout: 99999,
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: [
        './features/Advertisments Management.feature'
    ],

    capabilities: {
        browserName: 'chrome'
    },

    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        format:  'pretty',
        require: [
            './features/step_definitions/*.js',
            './support/env.js',
        './support/hook.js']
    },

    params: {
        env: {
            hostname: 'http://localhost:3000/advertisements'
        }
    }

};