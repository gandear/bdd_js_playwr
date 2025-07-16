// Generated from: src\features\ui\orangehrm-login.feature
import { test } from "../../../../../src/fixtures/page.fixture.js";

test.describe('OrangeHRM Login Functionality', () => {

  test.describe('Successful Login', () => {

    test.beforeEach('Background', async ({ Given, loginPage, logger }) => {
      await Given('I am on the OrangeHRM login page', null, { loginPage, logger }); 
    });
    
    test('User logs in successfully with valid credentials', { tag: ['@ui', '@login'] }, async ({ When, loginPage, logger, Then, dashboardPage }) => { 
      await When('I log in as "Admin" with password "admin123"', null, { loginPage, logger }); 
      await Then('I should be logged in successfully and redirected to the dashboard', null, { dashboardPage, logger }); 
    });

  });

  test.describe('Unsuccessful Login Attempts', () => {

    test.beforeEach('Background', async ({ Given, loginPage, logger }) => {
      await Given('I am on the OrangeHRM login page', null, { loginPage, logger }); 
    });
    
    test.describe('User attempts to log in with invalid credentials', () => {

      test('Example #1', { tag: ['@ui', '@login'] }, async ({ When, loginPage, logger, Then }) => { 
        await When('I attempt to log in as "wrongUser" with password "admin123"', null, { loginPage, logger }); 
        await Then('I should see an error message "Invalid credentials"', null, { loginPage, logger }); 
      });

      test('Example #2', { tag: ['@ui', '@login'] }, async ({ When, loginPage, logger, Then }) => { 
        await When('I attempt to log in as "Admin" with password "wrongPass"', null, { loginPage, logger }); 
        await Then('I should see an error message "Invalid credentials"', null, { loginPage, logger }); 
      });

      test('Example #3', { tag: ['@ui', '@login'] }, async ({ When, loginPage, logger, Then }) => { 
        await When('I attempt to log in as "" with password "admin123"', null, { loginPage, logger }); 
        await Then('I should see an error message "Required"', null, { loginPage, logger }); 
      });

      test('Example #4', { tag: ['@ui', '@login'] }, async ({ When, loginPage, logger, Then }) => { 
        await When('I attempt to log in as "Admin" with password ""', null, { loginPage, logger }); 
        await Then('I should see an error message "Required"', null, { loginPage, logger }); 
      });

      test('Example #5', { tag: ['@ui', '@login'] }, async ({ When, loginPage, logger, Then }) => { 
        await When('I attempt to log in as "" with password ""', null, { loginPage, logger }); 
        await Then('I should see an error message "Required"', null, { loginPage, logger }); 
      });

    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\features\\ui\\orangehrm-login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":8,"tags":["@ui","@login"],"steps":[{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am on the OrangeHRM login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I log in as \"Admin\" with password \"admin123\"","stepMatchArguments":[{"group":{"start":12,"value":"\"Admin\"","children":[{"start":13,"value":"Admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":34,"value":"\"admin123\"","children":[{"start":35,"value":"admin123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should be logged in successfully and redirected to the dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":21,"tags":["@ui","@login"],"steps":[{"pwStepLine":22,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I am on the OrangeHRM login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I attempt to log in as \"wrongUser\" with password \"admin123\"","stepMatchArguments":[{"group":{"start":23,"value":"\"wrongUser\"","children":[{"start":24,"value":"wrongUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"\"admin123\"","children":[{"start":50,"value":"admin123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Invalid credentials\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Invalid credentials\"","children":[{"start":31,"value":"Invalid credentials","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":22,"tags":["@ui","@login"],"steps":[{"pwStepLine":22,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I am on the OrangeHRM login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I attempt to log in as \"Admin\" with password \"wrongPass\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Admin\"","children":[{"start":24,"value":"Admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"wrongPass\"","children":[{"start":46,"value":"wrongPass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Invalid credentials\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Invalid credentials\"","children":[{"start":31,"value":"Invalid credentials","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":37,"pickleLine":23,"tags":["@ui","@login"],"steps":[{"pwStepLine":22,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I am on the OrangeHRM login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I attempt to log in as \"\" with password \"admin123\"","stepMatchArguments":[{"group":{"start":23,"value":"\"\"","children":[{"start":24,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"admin123\"","children":[{"start":41,"value":"admin123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Required\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Required\"","children":[{"start":31,"value":"Required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":42,"pickleLine":24,"tags":["@ui","@login"],"steps":[{"pwStepLine":22,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I am on the OrangeHRM login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I attempt to log in as \"Admin\" with password \"\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Admin\"","children":[{"start":24,"value":"Admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"\"","children":[{"start":46,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Required\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Required\"","children":[{"start":31,"value":"Required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":47,"pickleLine":25,"tags":["@ui","@login"],"steps":[{"pwStepLine":22,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I am on the OrangeHRM login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I attempt to log in as \"\" with password \"\"","stepMatchArguments":[{"group":{"start":23,"value":"\"\"","children":[{"start":24,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"\"","children":[{"start":41,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Required\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Required\"","children":[{"start":31,"value":"Required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end