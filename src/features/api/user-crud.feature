@crud @users
Feature: User CRUD operations

  Background:
    Given I have a valid API endpoint

  @post @create @users @positive
  Scenario Outline: Create users with different data
    Given I send a POST request to "/api/users" with payload:
      """
      {
        "name": "<name>",
        "job": "<job>"
      }
      """
    Then the response status should be 201
    And the response should have property "name" with value "<name>"
    And the response should have property "job" with value "<job>"
    And the response should have property "id"
    And the response should have property "createdAt"

    Examples:
      | name      | job           |
      | morpheus  | leader        |
      | neo       | the one       |
      | trinity   | hacker        |

  @put @patch @update @users @regression
  Scenario Outline: Update users with PUT and PATCH
    Given I send a <method> request to "/api/users/2" with payload:
      """
      {
        "name": "<name>",
        "job": "<job>"
      }
      """
    Then the response status should be 200
    And the response should have property "name" with value "<name>"
    And the response should have property "job" with value "<job>"
    And the response should have property "updatedAt"

    Examples:
      | method | name      | job            |
      | PUT    | morpheus  | zion resident  |
      | PATCH  | neo       | savior         |

  @delete @remove @users @regression
  Scenario Outline: Delete users from different endpoints
    Given I send a DELETE request to "/api/users/<user_id>"
    Then the response status should be 204

    Examples:
      | user_id |
      | 2       |
      | 3       |
      | 4       |
