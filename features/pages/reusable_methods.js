const { element, browser } = require("protractor");

var Library = function() {

  browser.waitForAngularEnabled(false);
  let usernameInput = element(by.id('user-name'));
  let passwordInput = element(by.id('password'));
  let logInButton = element(by.css('input.btn_action'));

  var itemsArray = ['Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt','Sauce Labs Fleece Jacket'];
  let productSort = element(by.css('select[class="product_sort_container"]'));
  let productSortAtoZ = element(by.css('option[value="az"]'));
  let productSortZtoA = element(by.css('option[value="za"]'));
  let item1 = element(by.xpath('//div[text()="Sauce Labs Bolt T-Shirt"]/ancestor::div[@class="inventory_item"]//button[text()="ADD TO CART"]'));
  let item2 = element(by.xpath('//div[text()="Sauce Labs Fleece Jacket"]/ancestor::div[@class="inventory_item"]//button[text()="ADD TO CART"]'));
  let item3 = element(by.xpath('//div[text()="Sauce Labs Bike Light"]/ancestor::div[@class="inventory_item"]//button[text()="ADD TO CART"]'));

  let cartIcon = element(by.id('shopping_cart_container'));
  let cartItems = element.all(by.css('div[class="cart_item_label"]'));
  let cartItem1 = element(by.xpath('//div[text()="Sauce Labs Bolt T-Shirt"]/ancestor::div[@class="cart_item"]//button[text()="REMOVE"]'));
  let cartItem2 = element(by.xpath('//div[text()="Sauce Labs Fleece Jacket"]/ancestor::div[@class="cart_item"]//button[text()="REMOVE"]'));
  let cartItem3 = element(by.xpath('//div[text()="Sauce Labs Bike Light"]/ancestor::div[@class="cart_item"]//button[text()="REMOVE"]'));
  let continueShopping = element(by.xpath('//a[text()="Continue Shopping"]'));
  let cartItem2Price = element(by.xpath('//div[text()="Sauce Labs Fleece Jacket"]/ancestor::div[@class="cart_item_label"]//div[@class="inventory_item_price"][text()="49.99"]'));
  let cartItem3Price = element(by.xpath('//div[text()="Sauce Labs Bike Light"]/ancestor::div[@class="cart_item_label"]//div[@class="inventory_item_price"][text()="9.99"]'));
  let checkoutBtn = element(by.css('a[class="btn_action checkout_button"]'));
  let firstName = element(by.id('first-name'));
  let lastName = element(by.id('last-name'));
  let zip = element(by.id('postal-code'));
  let continueCheckout = element(by.css('input[class="btn_primary cart_button"]'));
  let orderSummary = element(by.css('div[class="summary_info"]'));
  let finishOrder = element(by.xpath('//a[text()="FINISH"]'));
  

  this.get = function() {
    browser.get('https://www.saucedemo.com/');
  };

  // Typing Username
  this.enterUsername = function(username)
  {
    usernameInput.sendKeys(username);
  };

  // Typing Password
  this.enterPassword = function(password)
  {
    passwordInput.sendKeys(password);
  };

  // Clicking on Login Button
  this.clickOnLogin = function()
  {
    logInButton.click();
  };

  this.verifyHomePage = function()
  {
    return productSort.isDisplayed();
  }

  // Sorting items in Ascending order
  this.sortProductAscending = function()
  {
    productSort.click();
    productSortAtoZ.click();
    console.log('Sorted products in Ascending order');
  };

  // Sorting items in Descending order
  this.sortProductDescending = function()
  {
    productSort.click();
    productSortZtoA.click();
    console.log('Sorted products in Descending order');
  };

  // Add items to Cart
  this.addItemsToCart = function()
  {
    item1.click();
    item2.click();
    console.log('Added items to cart');
    browser.sleep(2000);
  };  

  // Add another item
  this.addAnotherItemToCart = function()
  {
    item3.click();
    console.log('Added another item to cart');
    browser.sleep(2000);
  };  

  // Clicking on Cart
  this.clickOnCartIcon = function()
  {
      cartIcon.click();
      console.log('Navigated to shopping cart');
  };

  // Calidating Items in Cart
  this.verifyCartItems = function()
  {
      expect(cartItems.count()).toBe(2);
      expect(cartItem1.isDisplayed).toBeTruthy();
      expect(cartItem2.isDisplayed).toBeTruthy();
      console.log('Items in cart matched');
  };

  this.item1InCart = function()
  {
    return cartItem1.isDisplayed()
  };

  this.item2InCart = function()
  {
    return cartItem2.isDisplayed()
  };

  this.item3InCart = function()
  {
    return cartItem3.isDisplayed()
  };

  // Removing an item from Cart
  this.removeAnItem = function()
  {
      cartItem1.click();
      console.log('One Item removed from cart');
  };

  // Continuing shopping
  this.clickOnContinueShopping = function()
  {
      continueShopping.click();
      console.log('Clicked on Continue Shopping');
  };

  // Validating newly added items in cart
  this.verifyNewCartItems = function()
  {
      browser.sleep(2000);
      expect(cartItems.count()).toBe(2);
      expect(cartItem3.isDisplayed).toBeTruthy();
      expect(cartItem2.isDisplayed).toBeTruthy();
      console.log('New Items in cart matched');
      browser.sleep(2000);
  };

  this.cartItemPrice2 = function()
  {
     return cartItem2Price.isDisplayed();
  };

  this.cartItemPrice3 = function()
  {
     return cartItem3Price.isDisplayed();
  };

  this.checkOut = function()
  {
    browser.sleep(2000);
    checkoutBtn.click();
    firstName.sendKeys('User');
    lastName.sendKeys('User');
    zip.sendKeys('11111');
    continueCheckout.click();
    browser.sleep(2000);
  }

  this.viewSummary = function()
  {
    return orderSummary.isDisplayed()
  }

  this.completeOrder = function()
  {
    browser.sleep(2000);
    finishOrder.click();
  }
};

module.exports = Library;
