@ui @pim
Feature: OrangeHRM PIM Module Functionality

  Background:
    Given I am on the OrangeHRM login page
    When I log in as "Admin" with password "admin123"
    Then I should be logged in successfully and redirected to the dashboard

  @addEmployee
  Scenario: Add a new employee successfully
    Given I am in the PIM module
    When I add employee with First Name "John", Middle Name "D.", Last Name "Doe"
    Then I should see a success message "Successfully Saved"

  @searchDynamicEmployee
  Scenario: Search for an existing employee by picking from table
    Given I am in the PIM module and there are employees visible in the results table 
    When I pick a random employee name from the table and search for it
    Then the picked employee should be visible in the results table

  @searchNonExistentEmployee
  Scenario: Search for a non-existent employee
    Given I am in the PIM module
    When I search for employee "NonExistent User"
    Then I should see the message "No Records Found"