// Generated from: src\features\ui\orangehrm-pim.feature
import { test } from "../../../../../src/fixtures/page.fixture.js";

test.describe('OrangeHRM PIM Module Functionality', () => {

  test.beforeEach('Background', async ({ Given, loginPage, logger, When, Then, dashboardPage }) => {
    await Given('I am on the OrangeHRM login page', null, { loginPage, logger }); 
    await When('I log in as "Admin" with password "admin123"', null, { loginPage, logger }); 
    await Then('I should be logged in successfully and redirected to the dashboard', null, { dashboardPage, logger }); 
  });
  
  test('Add a new employee successfully', { tag: ['@ui', '@pim', '@addEmployee'] }, async ({ Given, dashboardPage, pimPage, logger, When, Then }) => { 
    await Given('I am in the PIM module', null, { dashboardPage, pimPage, logger }); 
    await When('I add employee with First Name "John", Middle Name "D.", Last Name "Doe"', null, { pimPage, logger }); 
    await Then('I should see a success message "Successfully Saved"', null, { pimPage, logger }); 
  });

  test('Search for an existing employee by picking from table', { tag: ['@ui', '@pim', '@searchDynamicEmployee'] }, async ({ Given, dashboardPage, pimPage, logger, When, Then }) => { 
    await Given('I am in the PIM module and there are employees visible in the results table', null, { dashboardPage, pimPage, logger }); 
    await When('I pick a random employee name from the table and search for it', null, { pimPage, logger }); 
    await Then('the picked employee should be visible in the results table', null, { pimPage, logger }); 
  });

  test('Search for a non-existent employee', { tag: ['@ui', '@pim', '@searchNonExistentEmployee'] }, async ({ Given, dashboardPage, pimPage, logger, When, Then }) => { 
    await Given('I am in the PIM module', null, { dashboardPage, pimPage, logger }); 
    await When('I search for employee "NonExistent User"', null, { pimPage, logger }); 
    await Then('I should see the message "No Records Found"', null, { pimPage, logger }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\features\\ui\\orangehrm-pim.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":10,"tags":["@ui","@pim","@addEmployee"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the OrangeHRM login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I log in as \"Admin\" with password \"admin123\"","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"Admin\"","children":[{"start":13,"value":"Admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":34,"value":"\"admin123\"","children":[{"start":35,"value":"admin123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should be logged in successfully and redirected to the dashboard","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I am in the PIM module","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I add employee with First Name \"John\", Middle Name \"D.\", Last Name \"Doe\"","stepMatchArguments":[{"group":{"start":31,"value":"\"John\"","children":[{"start":32,"value":"John","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"D.\"","children":[{"start":52,"value":"D.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":67,"value":"\"Doe\"","children":[{"start":68,"value":"Doe","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see a success message \"Successfully Saved\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Successfully Saved\"","children":[{"start":32,"value":"Successfully Saved","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":16,"tags":["@ui","@pim","@searchDynamicEmployee"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the OrangeHRM login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I log in as \"Admin\" with password \"admin123\"","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"Admin\"","children":[{"start":13,"value":"Admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":34,"value":"\"admin123\"","children":[{"start":35,"value":"admin123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should be logged in successfully and redirected to the dashboard","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I am in the PIM module and there are employees visible in the results table","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I pick a random employee name from the table and search for it","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the picked employee should be visible in the results table","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":22,"tags":["@ui","@pim","@searchNonExistentEmployee"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the OrangeHRM login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I log in as \"Admin\" with password \"admin123\"","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"Admin\"","children":[{"start":13,"value":"Admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":34,"value":"\"admin123\"","children":[{"start":35,"value":"admin123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should be logged in successfully and redirected to the dashboard","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given I am in the PIM module","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I search for employee \"NonExistent User\"","stepMatchArguments":[{"group":{"start":22,"value":"\"NonExistent User\"","children":[{"start":23,"value":"NonExistent User","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should see the message \"No Records Found\"","stepMatchArguments":[{"group":{"start":25,"value":"\"No Records Found\"","children":[{"start":26,"value":"No Records Found","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end