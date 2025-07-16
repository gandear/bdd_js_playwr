import { createBdd } from 'playwright-bdd';
import { test } from '../../fixtures/page.fixture.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('I am in the PIM module', async ({ dashboardPage, pimPage, logger }) => {
  await dashboardPage.navigateToPIM();
  logger.info('Navigated to PIM page');

  const headerVisible = await pimPage.pimHeader.isVisible();
  expect.soft(pimPage.pimHeader).toBeVisible();
  logger.info('PIM module header is visible', { visible: headerVisible });
});

Given('I am in the PIM module and there are employees visible in the results table', async ({ dashboardPage, pimPage, logger }) => {
  logger.info('Navigating to PIM module and verifying employee data visibility');

  await dashboardPage.navigateToPIM();
  await pimPage.pimHeader.waitFor({ state: 'visible' });
  await pimPage.resultsTableGrid.waitFor({ state: 'visible' });

  expect.soft(pimPage.tableBodyRows.first()).toBeVisible({ timeout: 15000 });
  expect.soft(pimPage.recordsFoundMessage).toBeVisible();

  const employeesVisible = await pimPage.areEmployeesVisibleInTable();
  expect.soft(employeesVisible).toBeTruthy();
  logger.info('Employees visible in results table', { employeesVisible });
});

When('I add employee with First Name {string}, Middle Name {string}, Last Name {string}', async ({ pimPage, logger }, firstName, middleName, lastName) => {
  const fullName = `${firstName}${middleName ? ' ' + middleName : ''} ${lastName}`;
  logger.info(`Adding employee: ${fullName}`);

  await pimPage.clickAddEmployee();
  await pimPage.addEmployee(firstName, middleName, lastName);

  logger.info('Employee add process initiated');
});

When('I pick a random employee name from the table and search for it', async function ({ pimPage, logger }) {
  logger.info('Picking random employee from table and searching');

  await pimPage.resultsTableGrid.waitFor({ state: 'visible' });
  await expect(pimPage.tableBodyRows.first()).toBeVisible({ timeout: 15000 });

  this.pickedEmployeeDetails = await pimPage.pickRandomEmployeeDetails();
  logger.info('Picked employee details', this.pickedEmployeeDetails);

  await pimPage.searchEmployee(this.pickedEmployeeDetails.firstName);
  logger.info(`Searching for employee: ${this.pickedEmployeeDetails.firstName}`);
});

When('I search for employee {string}', async ({ pimPage, logger }, employeeName) => {
  logger.info(`Searching for employee: ${employeeName}`);

  await pimPage.searchEmployee(employeeName);
  logger.info('Employee search submitted');
});

Then('I should see a success message {string}', async ({ pimPage, logger }, expectedMessage) => {
  logger.info(`Verifying success message: "${expectedMessage}"`);

  const actualMessage = await pimPage.getSuccessMessage();
  expect.soft(actualMessage).toContain(expectedMessage);

  const messageMatches = actualMessage.includes(expectedMessage);
  logger.info('Success message matches expected', { expected: expectedMessage, actual: actualMessage, matches: messageMatches });
});

Then('I should see the message {string}', async ({ pimPage, logger }, expectedMessage) => {
  logger.info(`Verifying message: "${expectedMessage}"`);

  expect.soft(pimPage.recordsFoundMessage).toBeVisible();
  expect.soft(pimPage.recordsFoundMessage).toHaveText(expectedMessage);

  if (expectedMessage.includes('No Records Found')) {
    const rowCount = await pimPage.tableBodyRows.count();
    expect.soft(rowCount).toBe(0);
    logger.info('No employee rows found in table', { rowCount });
  }

  logger.info(`Message '${expectedMessage}' found and verified`);
});

Then('the picked employee should be visible in the results table', async function ({ pimPage, logger }) {
  logger.info('Verifying picked employee appears in results table');

  await pimPage.recordsFoundMessage.waitFor({ state: 'visible', timeout: 15000 });
  await pimPage.resultsTableGrid.waitFor({ state: 'visible', timeout: 15000 });

  const employeesVisible = await pimPage.areEmployeesVisibleInTable();
  expect.soft(employeesVisible).toBeTruthy();
  logger.info('Employees are visible in table', { employeesVisible });

  const { firstName, lastName } = this.pickedEmployeeDetails;
  const expectedFirstName = firstName.trim();
  const expectedLastName = lastName.trim();

  const allRows = await pimPage.tableBodyRows.all();
  let found = false;

  for (const row of allRows) {
    await row.locator('div[role="cell"]').nth(2).waitFor({ state: 'visible', timeout: 10000 });
    await row.locator('div[role="cell"]').nth(3).waitFor({ state: 'visible', timeout: 10000 });

    const actualFirst = await row.locator('div[role="cell"]').nth(2).textContent();
    const actualLast = await row.locator('div[role="cell"]').nth(3).textContent();

    if (actualFirst.trim() === expectedFirstName && actualLast.trim() === expectedLastName) {
      found = true;
      logger.info(`Picked employee found in table: ${expectedFirstName} ${expectedLastName}`);
      break;
    }
  }

  expect(found, `Employee ${expectedFirstName} ${expectedLastName} not found in the results table.`).toBe(true);
  logger.info('Employee found in the results table', { expectedFirstName, expectedLastName, found });
});
