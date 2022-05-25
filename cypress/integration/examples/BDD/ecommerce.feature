Feature: url

    application Regression
    
    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify Thank You message

    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
        |name | gender |
        |bobz | Male   |
    Then validate the forms behaviour
    And select the shop page