Feature: Increment the counter by two
    This feature lets a user increment (by N) the counter by clicking on the button.

Scenario: Basic increment two scenario
    Given I am on the counter-n page
    When I enter the value 5 in the input "incrementNum"
    When I click on the increment by N button 10 times
    Then The counter by N should show "50"

