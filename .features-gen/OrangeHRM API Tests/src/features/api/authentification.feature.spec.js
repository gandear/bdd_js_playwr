// Generated from: src\features\api\authentification.feature
import { test } from "../../../../../src/fixtures/api.fixture.js";

test.describe('User authentication', () => {

  test.describe('User registration scenarios', () => {

    test('Example #1', { tag: ['@auth', '@login', '@register', '@positive', '@smoke'] }, async ({ Given, apiContext, apiResponse, logger, Then, And }) => { 
      await Given('I send a POST request to "/api/register" with payload:', {"docString":{"content":"{\n  \"email\": \"eve.holt@reqres.in\",\n  \"password\": \"pistol\"\n}"}}, { apiContext, apiResponse, logger }); 
      await Then('the response status should be 200', null, { apiResponse, logger }); 
      await And('the response should have property "id"', null, { apiResponse, logger }); 
      await And('the response should have property "token"', null, { apiResponse, logger }); 
    });

    test('Example #2', { tag: ['@auth', '@login', '@register', '@positive', '@smoke'] }, async ({ Given, apiContext, apiResponse, logger, Then, And }) => { 
      await Given('I send a POST request to "/api/register" with payload:', {"docString":{"content":"{\n  \"email\": \"eve.holt@reqres.in\",\n  \"password\": \"password123\"\n}"}}, { apiContext, apiResponse, logger }); 
      await Then('the response status should be 200', null, { apiResponse, logger }); 
      await And('the response should have property "id"', null, { apiResponse, logger }); 
      await And('the response should have property "token"', null, { apiResponse, logger }); 
    });

  });

  test.describe('Registration validation errors', () => {

    test('Example #1', { tag: ['@auth', '@login', '@register', '@negative', '@validation'] }, async ({ Given, apiContext, apiResponse, logger, Then, And }) => { 
      await Given('I send a POST request to "/api/register" with payload:', {"docString":{"content":"{\"email\": \"sydney@fife\"}"}}, { apiContext, apiResponse, logger }); 
      await Then('the response status should be 400', null, { apiResponse, logger }); 
      await And('the response should have property "error" with value "Missing password"', null, { apiResponse, logger }); 
    });

    test('Example #2', { tag: ['@auth', '@login', '@register', '@negative', '@validation'] }, async ({ Given, apiContext, apiResponse, logger, Then, And }) => { 
      await Given('I send a POST request to "/api/register" with payload:', {"docString":{"content":"{\"password\": \"pistol\"}"}}, { apiContext, apiResponse, logger }); 
      await Then('the response status should be 400', null, { apiResponse, logger }); 
      await And('the response should have property "error" with value "Missing email or username"', null, { apiResponse, logger }); 
    });

  });

  test.describe('User login scenarios', () => {

    test('Example #1', { tag: ['@auth', '@login', '@register', '@positive'] }, async ({ Given, apiContext, apiResponse, logger, Then, And }) => { 
      await Given('I send a POST request to "/api/login" with payload:', {"docString":{"content":"{\n  \"email\": \"eve.holt@reqres.in\",\n  \"password\": \"cityslicka\"\n}"}}, { apiContext, apiResponse, logger }); 
      await Then('the response status should be 200', null, { apiResponse, logger }); 
      await And('the response should have property "token"', null, { apiResponse, logger }); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\features\\api\\authentification.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":19,"tags":["@auth","@login","@register","@positive","@smoke"],"steps":[{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I send a POST request to \"/api/register\" with payload:","stepMatchArguments":[{"group":{"start":9,"value":"POST","children":[]},"parameterTypeName":"word"},{"group":{"start":25,"value":"\"/api/register\"","children":[{"start":26,"value":"/api/register","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":11,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And the response should have property \"id\"","stepMatchArguments":[{"group":{"start":34,"value":"\"id\"","children":[{"start":35,"value":"id","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And the response should have property \"token\"","stepMatchArguments":[{"group":{"start":34,"value":"\"token\"","children":[{"start":35,"value":"token","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":20,"tags":["@auth","@login","@register","@positive","@smoke"],"steps":[{"pwStepLine":16,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I send a POST request to \"/api/register\" with payload:","stepMatchArguments":[{"group":{"start":9,"value":"POST","children":[]},"parameterTypeName":"word"},{"group":{"start":25,"value":"\"/api/register\"","children":[{"start":26,"value":"/api/register","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And the response should have property \"id\"","stepMatchArguments":[{"group":{"start":34,"value":"\"id\"","children":[{"start":35,"value":"id","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And the response should have property \"token\"","stepMatchArguments":[{"group":{"start":34,"value":"\"token\"","children":[{"start":35,"value":"token","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":33,"tags":["@auth","@login","@register","@negative","@validation"],"steps":[{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given I send a POST request to \"/api/register\" with payload:","stepMatchArguments":[{"group":{"start":9,"value":"POST","children":[]},"parameterTypeName":"word"},{"group":{"start":25,"value":"\"/api/register\"","children":[{"start":26,"value":"/api/register","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 400","stepMatchArguments":[{"group":{"start":30,"value":"400","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":29,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"And the response should have property \"error\" with value \"Missing password\"","stepMatchArguments":[{"group":{"start":34,"value":"\"error\"","children":[{"start":35,"value":"error","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"Missing password\"","children":[{"start":54,"value":"Missing password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":34,"tags":["@auth","@login","@register","@negative","@validation"],"steps":[{"pwStepLine":33,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given I send a POST request to \"/api/register\" with payload:","stepMatchArguments":[{"group":{"start":9,"value":"POST","children":[]},"parameterTypeName":"word"},{"group":{"start":25,"value":"\"/api/register\"","children":[{"start":26,"value":"/api/register","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 400","stepMatchArguments":[{"group":{"start":30,"value":"400","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":35,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"And the response should have property \"error\" with value \"Missing email or username\"","stepMatchArguments":[{"group":{"start":34,"value":"\"error\"","children":[{"start":35,"value":"error","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"Missing email or username\"","children":[{"start":54,"value":"Missing email or username","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":42,"pickleLine":50,"tags":["@auth","@login","@register","@positive"],"steps":[{"pwStepLine":43,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given I send a POST request to \"/api/login\" with payload:","stepMatchArguments":[{"group":{"start":9,"value":"POST","children":[]},"parameterTypeName":"word"},{"group":{"start":25,"value":"\"/api/login\"","children":[{"start":26,"value":"/api/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":45,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And the response should have property \"token\"","stepMatchArguments":[{"group":{"start":34,"value":"\"token\"","children":[{"start":35,"value":"token","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end