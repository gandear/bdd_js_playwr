@ui @login
Feature: OrangeHRM Login Functionality

  Rule: Successful Login
    Background:
      Given I am on the OrangeHRM login page

    Scenario: User logs in successfully with valid credentials
      When I log in as "Admin" with password "admin123"
      Then I should be logged in successfully and redirected to the dashboard

  Rule: Unsuccessful Login Attempts
    Background:
      Given I am on the OrangeHRM login page

    Scenario Outline: User attempts to log in with invalid credentials
      When I attempt to log in as "<username>" with password "<password>"
      Then I should see an error message "<error_message>"
      Examples:
        | username      | password    | error_message       |
        | wrongUser     | admin123    | Invalid credentials |
        | Admin         | wrongPass   | Invalid credentials |
        |               | admin123    | Required            |
        | Admin         |             | Required            |
        |               |             | Required            |