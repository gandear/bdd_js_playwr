import { BasePage } from '../base/BasePage.js';
import { logPage } from '../../utils/customLoggerMethods.js.bak';
import { expect } from '@playwright/test'; // Adăugat pentru expect în POM (doar pentru verificări de încărcare)

export class OrangeHrmDashboardPage extends BasePage {
  constructor(page, logger) {
    super(page);
    this.logger = logger;

    if (!logger) {
      console.warn('[POM] Logger not provided to OrangeHrmDashboardPage');
    }

    this.dashboardHeader = page.locator('h6.oxd-text').filter({ hasText: 'Dashboard' });
    this.pimMenuItem = page.locator('a.oxd-main-menu-item').filter({ hasText: 'PIM' });
  }

  async navigateToPIM() {
    if (this.logger) logPage(this.logger, 'DashboardPage', 'Navigating to PIM module');
    await this.pimMenuItem.click();
    // Aserțiune critică: Așteptăm ca header-ul PIM să devină vizibil
    await expect(this.page.locator('h6.oxd-text').filter({ hasText: 'PIM' })).toBeVisible({ timeout: 10000 });
    if (this.logger) logPage(this.logger, 'DashboardPage', 'Successfully navigated to PIM module');
  }

  async isDashboardHeaderVisible() {
    return await this.dashboardHeader.isVisible();
  }

  async isPIMMenuItemVisible() {
    return await this.pimMenuItem.isVisible();
  }
}