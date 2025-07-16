import { BasePage } from '../base/BasePage.js';
import { logPage } from '../../utils/customLoggerMethods.js.bak';

export class OrangeHrmPIMPage extends BasePage {
  constructor(page, logger) {
    super(page);
    this.logger = logger;

    if (!logger) {
      console.warn('[POM] Logger not provided to OrangeHrmPIMPage');
    }

    this.pimHeader = page.locator('h6.oxd-text').filter({ hasText: 'PIM' });
    this.addEmployeeButton = page.locator('button.oxd-button--secondary').filter({ hasText: 'Add' });
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.middleNameInput = page.getByPlaceholder('Middle Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.saveButton = page.locator('button[type="submit"]').filter({ hasText: 'Save' });
    this.successfullySavedMessage = page.locator('.oxd-text--toast-message');

    this.employeeNameInput = page.locator('input[placeholder="Type for hints..."]').first();
    this.searchButton = page.locator('button[type="submit"]').filter({ hasText: 'Search' });
    this.resetButton = page.locator('button.oxd-button--ghost').filter({ hasText: 'Reset' });

    this.resultsTableGrid = page.locator('.oxd-table-body');
    this.recordsFoundMessage = page.locator('.orangehrm-horizontal-padding > .oxd-text').filter({ hasText: /(?:No )?Records? Found/i });
    this.tableBodyRows = page.locator('div[role="row"].oxd-table-row');
    this.noRecordsFoundText = page.locator('.oxd-text--span').filter({ hasText: 'No Records Found' }); // Locator explicit pentru "No Records Found"
  }

  async clickAddEmployee() {
    if (this.logger) logPage(this.logger, 'PIMPage', 'Clicking "Add Employee" button');
    await this.addEmployeeButton.click();
    await this.firstNameInput.waitFor({ state: 'visible' });
    if (this.logger) logPage(this.logger, 'PIMPage', 'Navigated to Add Employee form');
  }

  async addEmployee(firstName, middleName, lastName) {
    if (this.logger) {
      logPage(this.logger, 'PIMPage', `Adding new employee: ${firstName} ${middleName || ''} ${lastName}`);
    }
    await this.firstNameInput.fill(firstName);
    if (middleName) await this.middleNameInput.fill(middleName);
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();
    if (this.logger) logPage(this.logger, 'PIMPage', 'Employee details submitted to save');
  }

  async areEmployeesVisibleInTable() {
    if (this.logger) logPage(this.logger, 'PIMPage', 'Checking if employees are visible in the table');
    try {
      await Promise.race([
        this.tableBodyRows.first().waitFor({ state: 'visible', timeout: 5000 }),
        this.noRecordsFoundText.waitFor({ state: 'visible', timeout: 5000 })
      ]);

      const noRecordsVisible = await this.noRecordsFoundText.isVisible();
      const firstRowVisible = await this.tableBodyRows.first().isVisible();

      if (noRecordsVisible) {
        if (this.logger) logPage(this.logger, 'PIMPage', 'No employees found in table (message visible)');
        return false;
      } else if (firstRowVisible) {
        if (this.logger) logPage(this.logger, 'PIMPage', 'Employees are visible in the table (first row visible)');
        return true;
      } else {
        if (this.logger) logPage(this.logger, 'PIMPage', 'Employee visibility could not be determined (neither rows nor "No Records Found" message visible)');
        return false;
      }
    } catch (error) {
      this.logger?.error('Error while checking employee visibility in table', { error });
      return false;
    }
  }

  async searchEmployee(employeeName) {
    if (this.logger) logPage(this.logger, 'PIMPage', `Searching for employee: "${employeeName}"`);
    await this.employeeNameInput.fill(employeeName);
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
    await this.recordsFoundMessage.waitFor({ state: 'visible' });
    if (this.logger) logPage(this.logger, 'PIMPage', `Search for "${employeeName}" completed`);
  }

  async getSuccessMessage() {
    if (this.logger) logPage(this.logger, 'PIMPage', 'Attempting to retrieve success message');
    try {
      await this.successfullySavedMessage.waitFor({ state: 'visible', timeout: 10000 });
      const messageText = await this.successfullySavedMessage.textContent();
      if (this.logger) logPage(this.logger, 'PIMPage', `Success message received: "${messageText}"`);
      return messageText;
    } catch (error) {
      this.logger?.error('Failed to retrieve success message within timeout', { error });
      throw error;
    }
  }

  async pickRandomEmployeeDetails() {
    if (this.logger) logPage(this.logger, 'PIMPage', 'Picking random employee details from the table');
    try {
      await this.resultsTableGrid.waitFor({ state: 'visible', timeout: 20000 });

      const allRows = await this.tableBodyRows.all();
      if (allRows.length === 0) {
        const errorMessage = "No employee rows found to pick details from.";
        this.logger?.error(errorMessage);
        throw new Error(errorMessage);
      }

      const randomRow = allRows[Math.floor(Math.random() * allRows.length)];
      await randomRow.waitFor({ state: 'visible', timeout: 5000 });

      const firstNameCell = randomRow.locator('div[role="cell"]').nth(2);
      const lastNameCell = randomRow.locator('div[role="cell"]').nth(3);

      await firstNameCell.waitFor({ state: 'visible', timeout: 10000 });
      await lastNameCell.waitFor({ state: 'visible', timeout: 10000 });

      const firstName = await firstNameCell.textContent();
      const lastName = await lastNameCell.textContent();

      if (!firstName || !lastName) {
        const errorMessage = "Could not extract first and last name from the selected row.";
        this.logger?.error(errorMessage);
        throw new Error(errorMessage);
      }

      const employeeDetails = { firstName: firstName.trim(), lastName: lastName.trim() };
      if (this.logger) logPage(this.logger, 'PIMPage', `Random employee picked: ${employeeDetails.firstName} ${employeeDetails.lastName}`, employeeDetails);
      return employeeDetails;
    } catch (error) {
      this.logger?.error('Error while picking random employee details', { error });
      throw error;
    }
  }
}