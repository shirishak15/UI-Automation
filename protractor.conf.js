exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  multiCapabilities: [{
    'browserName': 'chrome',
    chromeOptions: {
      args: [ "--disable-gpu", "--headless"]
      }
  }, {
    'browserName': 'chrome'
  }],
  specs: [
    'features/*.feature'
  ],
  cucumberOpts: {
    require: 'features/steps/*steps.js',
    format: 'pretty'
  }
}
