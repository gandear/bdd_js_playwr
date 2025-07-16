// src/fixtures/page.fixture.js
import { test as base } from 'playwright-bdd';
import { childLogger } from '../utils/logger.js';

import { OrangeHrmLoginPage } from '../pages/auth/OrangeHrmLoginPage.js';
import { OrangeHrmDashboardPage } from '../pages/dashboard/OrangeHrmDashboardPage.js';
import { OrangeHrmPIMPage } from '../pages/pim/OrangeHrmPIMPage.js';

export const test = base.extend({
  // Centralized logger fixture
  logger: async ({}, use, testInfo) => {
    const logger = childLogger(testInfo.title);
    await use(logger);
  },

  // Page-object fixtures
  loginPage: async ({ page, logger }, use) => {
    const loginPage = new OrangeHrmLoginPage(page, logger);
    await use(loginPage);
  },

  dashboardPage: async ({ page, logger }, use) => {
    const dashboardPage = new OrangeHrmDashboardPage(page, logger);
    await use(dashboardPage);
  },

  pimPage: async ({ page, logger }, use) => {
    const pimPage = new OrangeHrmPIMPage(page, logger);
    await use(pimPage);
  },
});
