// Generated from: src\features\api\users-retrieval.feature
import { test } from "../../../../../src/fixtures/api.fixture.js";

test.describe('Get users from Reqres API', () => {

  test.describe('Retrieve users with different endpoints', () => {

    test('Example #1', { tag: ['@users', '@get', '@smoke'] }, async ({ Given, apiContext, apiResponse, logger, Then, And }) => { 
      await Given('I send a GET request to "/api/users?page=2"', null, { apiContext, apiResponse, logger }); 
      await Then('the response status should be 200', null, { apiResponse, logger }); 
      await And('the response should have property "page" with value 2', null, { apiResponse, logger }); 
      await And('the response should have property "data" as array', null, { apiResponse, logger }); 
    });

    test('Example #2', { tag: ['@users', '@get', '@smoke'] }, async ({ Given, apiContext, apiResponse, logger, Then, And }) => { 
      await Given('I send a GET request to "/api/users/2"', null, { apiContext, apiResponse, logger }); 
      await Then('the response status should be 200', null, { apiResponse, logger }); 
      await And('the response should have property "data.id" with value 2', null, { apiResponse, logger }); 
      await And('the response should have property "data.email" as string', null, { apiResponse, logger }); 
    });

    test('Example #3', { tag: ['@users', '@get', '@smoke'] }, async ({ Given, apiContext, apiResponse, logger, Then, And }) => { 
      await Given('I send a GET request to "/api/users?page=1"', null, { apiContext, apiResponse, logger }); 
      await Then('the response status should be 200', null, { apiResponse, logger }); 
      await And('the response should have property "page" with value 1', null, { apiResponse, logger }); 
      await And('the response should have property "data" as array', null, { apiResponse, logger }); 
    });

  });

  test('Retrieve single user with detailed validation', { tag: ['@users', '@get', '@regression'] }, async ({ Given, apiContext, apiResponse, logger, Then, And }) => { 
    await Given('I send a GET request to "/api/users/2"', null, { apiContext, apiResponse, logger }); 
    await Then('the response status should be 200', null, { apiResponse, logger }); 
    await And('the response should have property "data.id" with value 2', null, { apiResponse, logger }); 
    await And('the response should have property "data.email"', null, { apiResponse, logger }); 
    await And('the response should have property "data.first_name"', null, { apiResponse, logger }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\features\\api\\users-retrieval.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":13,"tags":["@users","@get","@smoke"],"steps":[{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I send a GET request to \"/api/users?page=2\"","stepMatchArguments":[{"group":{"start":9,"value":"GET","children":[]},"parameterTypeName":"word"},{"group":{"start":24,"value":"\"/api/users?page=2\"","children":[{"start":25,"value":"/api/users?page=2","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And the response should have property \"page\" with value 2","stepMatchArguments":[{"group":{"start":34,"value":"\"page\"","children":[{"start":35,"value":"page","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"2","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And the response should have property \"data\" as array","stepMatchArguments":[{"group":{"start":34,"value":"\"data\"","children":[{"start":35,"value":"data","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":14,"tags":["@users","@get","@smoke"],"steps":[{"pwStepLine":16,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I send a GET request to \"/api/users/2\"","stepMatchArguments":[{"group":{"start":9,"value":"GET","children":[]},"parameterTypeName":"word"},{"group":{"start":24,"value":"\"/api/users/2\"","children":[{"start":25,"value":"/api/users/2","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":18,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And the response should have property \"data.id\" with value 2","stepMatchArguments":[{"group":{"start":34,"value":"\"data.id\"","children":[{"start":35,"value":"data.id","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":55,"value":"2","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":19,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And the response should have property \"data.email\" as string","stepMatchArguments":[{"group":{"start":34,"value":"\"data.email\"","children":[{"start":35,"value":"data.email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":15,"tags":["@users","@get","@smoke"],"steps":[{"pwStepLine":23,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I send a GET request to \"/api/users?page=1\"","stepMatchArguments":[{"group":{"start":9,"value":"GET","children":[]},"parameterTypeName":"word"},{"group":{"start":24,"value":"\"/api/users?page=1\"","children":[{"start":25,"value":"/api/users?page=1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":25,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And the response should have property \"page\" with value 1","stepMatchArguments":[{"group":{"start":34,"value":"\"page\"","children":[{"start":35,"value":"page","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"1","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":26,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And the response should have property \"data\" as array","stepMatchArguments":[{"group":{"start":34,"value":"\"data\"","children":[{"start":35,"value":"data","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":31,"pickleLine":18,"tags":["@users","@get","@regression"],"steps":[{"pwStepLine":32,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given I send a GET request to \"/api/users/2\"","stepMatchArguments":[{"group":{"start":9,"value":"GET","children":[]},"parameterTypeName":"word"},{"group":{"start":24,"value":"\"/api/users/2\"","children":[{"start":25,"value":"/api/users/2","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":34,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"And the response should have property \"data.id\" with value 2","stepMatchArguments":[{"group":{"start":34,"value":"\"data.id\"","children":[{"start":35,"value":"data.id","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":55,"value":"2","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":35,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"And the response should have property \"data.email\"","stepMatchArguments":[{"group":{"start":34,"value":"\"data.email\"","children":[{"start":35,"value":"data.email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"And the response should have property \"data.first_name\"","stepMatchArguments":[{"group":{"start":34,"value":"\"data.first_name\"","children":[{"start":35,"value":"data.first_name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end