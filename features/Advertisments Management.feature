Feature: Ads Management

  Scenario: User is able to add new advertisment
    Given I visit the homepage
    When I have the current items
    And I click on the Add button
    And I have new ad info
    And I input the ad name
    And I input the address
    And I input the rooms
    And I input the price
    And I click save button to save the form
    Then The new ad is added