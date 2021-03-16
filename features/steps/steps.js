const { browser } = require('protractor');

var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var StepDefinitions = function() {

  var Library = require("../pages/reusable_methods.js");

  this.World = function MyWorld() {
    this.page = new Library();
  };

  this.Given('User is navigated to SauceDemo Page', function (callback) {
    this.page.get();
    browser.driver.manage().window().maximize();
    callback();
  });

  this.When('User enters username as $username and password as $password', function (username, password, callback) {
    this.page.enterUsername(username);
    this.page.enterPassword(password);
    this.page.clickOnLogin();
    browser.sleep(2000);
    callback();
  });

  this.Then('The user should be logged in succesfully', function (callback) {
    // this.page.verifyHomePage();
    expect(this.page.verifyHomePage()).to.eventually.be.true;
    callback();
  });

  this.Then('User tries sorting products', function (callback) {
    this.page.sortProductAscending();
    this.page.sortProductDescending();
    callback();
  });

  this.When('User adds items to the cart', function (callback) {
    this.page.addItemsToCart();
    callback();
  });

  this.Then('The added Items should be present in cart', function (callback) {
    this.page.clickOnCartIcon();
    // this.page.verifyCartItems();
    expect(this.page.item1InCart()).to.eventually.be.true;
    expect(this.page.item2InCart()).to.eventually.be.true;
    callback();
  });

  this.When('User removes an item and continues shopping', function (callback) {
    this.page.removeAnItem();
    this.page.clickOnContinueShopping();
    callback();
  });

  this.When('Adds another item to cart', function (callback) {
    this.page.addAnotherItemToCart();
    callback();
  });

  this.When('Then the cart items should have new changes', function (callback) {
    this.page.clickOnCartIcon();
    expect(this.page.item3InCart()).to.eventually.be.true;
    expect(this.page.item2InCart()).to.eventually.be.true;
    // browser.sleep(6000);
    callback();
  });

  this.When('User verifies the price', function (callback) {
    expect(this.page.cartItemPrice3()).to.eventually.be.true;
    expect(this.page.cartItemPrice2()).to.eventually.be.true;
    // browser.sleep(6000);
    callback();
  });

  this.When('User checks out, fills details and places order', function (callback) {
    this.page.checkOut();
    callback();
  });

  this.Then('User should see the order Summary and place order', function (callback) {
    expect(this.page.viewSummary()).to.eventually.be.true;
    this.page.completeOrder();
    browser.quit();
    callback();
  });
};

module.exports = StepDefinitions;