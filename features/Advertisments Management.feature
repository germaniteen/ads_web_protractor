Feature: Ads Management

  Scenario: User is able to add new add
    Given I visit the homepage
    When I have the current items
    When I click on the Add button
    And I input the ad name
    And I input the price
    And I click save button to save the form
    Then The new ad is added