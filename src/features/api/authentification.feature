@auth @login @register
Feature: User authentication

  @auth @register @positive @smoke
  Scenario Outline: User registration scenarios
    Given I send a POST request to "/api/register" with payload:
      """
      {
        "email": "<email>",
        "password": "<password>"
      }
      """
    Then the response status should be <status>
    And the response should have property "<property>"
    And the response should have property "<additional_property>"

    Examples:
      | email               | password    | status | property | additional_property |
      | eve.holt@reqres.in  | pistol      | 200    | id       | token              |
      | eve.holt@reqres.in  | password123 | 200    | id       | token              |

  @auth @register @negative @validation
  Scenario Outline: Registration validation errors
    Given I send a POST request to "/api/register" with payload:
      """
      <payload>
      """
    Then the response status should be 400
    And the response should have property "error" with value "<error_message>"

    Examples:
      | payload                          | error_message              |
      | {"email": "sydney@fife"}         | Missing password           |
      | {"password": "pistol"}           | Missing email or username  |

  @auth @login @positive
  Scenario Outline: User login scenarios
    Given I send a POST request to "/api/login" with payload:
      """
      {
        "email": "<email>",
        "password": "<password>"
      }
      """
    Then the response status should be <status>
    And the response should have property "<property>"

    Examples:
      | email               | password     | status | property |
      | eve.holt@reqres.in  | cityslicka   | 200    | token    |
