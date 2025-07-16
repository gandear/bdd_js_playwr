import { BasePage } from '../base/BasePage.js';
import { logPage } from '../../utils/customLoggerMethods.js.bak';
import { expect } from '@playwright/test';

export class OrangeHrmLoginPage extends BasePage {
  constructor(page, logger) {
    super(page);
    this.logger = logger;

    if (!logger) {
      console.warn('[POM] Logger not provided to OrangeHrmLoginPage');
    }

    this.loginPanel = page.locator('.orangehrm-login-container');
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.locator('button[type="submit"]');
    this.generalErrorMessage = page.locator('.oxd-alert-content-text');

    this.usernameRequiredMessage = page.locator('div.oxd-input-group:has(input[name="username"]) span.oxd-input-field-error-message');
    this.passwordRequiredMessage = page.locator('div.oxd-input-group:has(input[name="password"]) span.oxd-input-field-error-message');
  }

  async goto() {
    if (this.logger) logPage(this.logger, 'LoginPage', 'Navigating to login URL');
    await this.page.goto('/web/index.php/auth/login');
    // Este OK să ai un expect critic aici pentru a te asigura că pagina s-a încărcat.
    await expect(this.loginPanel).toBeVisible({ timeout: 10000 });
    if (this.logger) logPage(this.logger, 'LoginPage', 'Login page loaded and visible');
  }

  async login(username, password) {
    if (this.logger) {
      logPage(this.logger, 'LoginPage', 'Attempting to fill login credentials', {
        username: username !== null ? username : '[EMPTY]',
        passwordProvided: password !== null
      });
    }

    if (username !== null) {
      await this.usernameInput.fill(username);
    }
    if (password !== null) {
      await this.passwordInput.fill(password);
    }
    await this.loginButton.click();
    if (this.logger) logPage(this.logger, 'LoginPage', 'Login button clicked');
  }

  async isGeneralErrorMessageVisible() {
    return await this.generalErrorMessage.isVisible();
  }

  async getGeneralErrorMessageText() {
    return await this.generalErrorMessage.textContent();
  }

  async isUsernameRequiredMessageVisible() {
    return await this.usernameRequiredMessage.isVisible();
  }

  async isPasswordRequiredMessageVisible() {
    return await this.passwordRequiredMessage.isVisible();
  }

  async getUsernameRequiredMessageText() {
    return await this.usernameRequiredMessage.textContent();
  }

  async getPasswordRequiredMessageText() {
    return await this.passwordRequiredMessage.textContent();
  }
}