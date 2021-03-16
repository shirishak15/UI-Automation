Feature: SauceDemo
  As a user of the SauceDemo Application, I would like to test its functionality.

  Scenario: Place and verify Order
     Given User is navigated to SauceDemo Page
     When User enters username as standard_user and password as secret_sauce
     Then The user should be logged in succesfully
     Then User tries sorting products
     When User adds items to the cart
     Then The added Items should be present in cart
     When User removes an item and continues shopping
     When Adds another item to cart
     Then Then the cart items should have new changes
     And User verifies the price
     When User checks out, fills details and places order
     Then User should see the order Summary and place order
    