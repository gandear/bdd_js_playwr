@users @get
Feature: Get users from Reqres API

  @get @users @smoke
  Scenario Outline: Retrieve users with different endpoints
    Given I send a GET request to "<endpoint>"
    Then the response status should be <status>
    And the response should have property "<property>" with value <value>
    And the response should have property "<data_property>" as <data_type>

    Examples:
      | endpoint           | status | property | value | data_property | data_type |
      | /api/users?page=2  | 200    | page     | 2     | data          | array     |
      | /api/users/2       | 200    | data.id  | 2     | data.email    | string    |
      | /api/users?page=1  | 200    | page     | 1     | data          | array     |

@get @users @regression
Scenario: Retrieve single user with detailed validation
  Given I send a GET request to "/api/users/2"
  Then the response status should be 200
  And the response should have property "data.id" with value 2
  And the response should have property "data.email"
  And the response should have property "data.first_name"
