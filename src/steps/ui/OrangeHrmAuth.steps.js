import { createBdd } from 'playwright-bdd';
import { test } from '../../fixtures/page.fixture.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('I am on the OrangeHRM login page', async ({ loginPage, logger }) => {
  logger.info('OrangeHRM Login: Navigating to login page', { url: '/web/index.php/auth/login' });
  await loginPage.goto();
  logger.info('Login page loaded and panel visible', { success: true });
});

When('I log in as {string} with password {string}', async ({ loginPage, logger }, username, password) => {
  logger.info(`Attempting login with user: ${username}`);
  await loginPage.login(username, password);
  logger.info(`Login form submitted successfully for username: ${username}`);
});

When('I attempt to log in as {string} with password {string}', async ({ loginPage, logger }, username, password) => {
  const user = username || null;
  const pass = password || null;
  logger.info('Attempting login with potentially invalid credentials', {
    username: user ?? '[EMPTY]',
    hasPassword: Boolean(pass),
  });
  await loginPage.login(user, pass);
  logger.info('Login attempt submitted with possibly empty credentials');
});

Then('I should be logged in successfully and redirected to the dashboard', async ({ dashboardPage, logger }) => {
  logger.info('Verifying successful login and dashboard redirect');
  await expect(dashboardPage.dashboardHeader).toBeVisible();
  logger.info('Dashboard header is visible (Critical Check)', { success: true });

  // Soft assertion for additional elements
  expect.soft(dashboardPage.pimMenuItem).toBeVisible();
  logger.info('PIM menu item visibility', { visible: await dashboardPage.pimMenuItem.isVisible() });
});

Then('I should see an error message {string}', async ({ loginPage, logger }, expectedMessage) => {
  logger.info(`Verifying error message: "${expectedMessage}"`);

  switch (expectedMessage) {
    case 'Required': {
      const usernameEmpty = (await loginPage.usernameInput.inputValue()) === '';
      const passwordEmpty = (await loginPage.passwordInput.inputValue()) === '';
      logger.info('Login Page: Field validation status', { usernameEmpty, passwordEmpty });

      if (usernameEmpty && passwordEmpty) {
        expect.soft(loginPage.usernameRequiredMessage).toBeVisible();
        expect.soft(loginPage.usernameRequiredMessage).toHaveText('Required');
        expect.soft(loginPage.passwordRequiredMessage).toBeVisible();
        expect.soft(loginPage.passwordRequiredMessage).toHaveText('Required');
        logger.info('Both username and password required messages displayed', { success: true });
      } else if (usernameEmpty) {
        expect.soft(loginPage.usernameRequiredMessage).toBeVisible();
        expect.soft(loginPage.usernameRequiredMessage).toHaveText('Required');
        expect.soft(loginPage.passwordRequiredMessage).not.toBeVisible();
        logger.info('Username required message displayed', { success: true });
      } else if (passwordEmpty) {
        expect.soft(loginPage.passwordRequiredMessage).toBeVisible();
        expect.soft(loginPage.passwordRequiredMessage).toHaveText('Required');
        expect.soft(loginPage.usernameRequiredMessage).not.toBeVisible();
        logger.info('Password required message displayed', { success: true });
      } else {
        const errorMsg = `Expected "Required" message(s), but neither field was empty.`;
        logger.error('Required message validation', { success: false, error: errorMsg });
        expect.soft(false, errorMsg).toBe(true);
      }

      expect.soft(loginPage.generalErrorMessage).not.toBeVisible();
      break;
    }

    case 'Invalid credentials': {
      await loginPage.generalErrorMessage.waitFor({ state: 'visible', timeout: 5000 });
      expect.soft(loginPage.generalErrorMessage).toBeVisible();
      expect.soft(loginPage.generalErrorMessage).toHaveText(expectedMessage);
      expect.soft(loginPage.usernameRequiredMessage).not.toBeVisible();
      expect.soft(loginPage.passwordRequiredMessage).not.toBeVisible();
      logger.info('Invalid credentials message displayed correctly', { success: true });
      break;
    }

    default: {
      const errorMsg = `Unhandled expected error message type: "${expectedMessage}". Available types: ['Required', 'Invalid credentials']`;
      logger.error('Unhandled error message type', { success: false, error: errorMsg });
      throw new Error(errorMsg);
    }
  }
});
