// src/fixtures/api.fixture.js
import { test as base } from 'playwright-bdd';
import { getApiContext } from '../context/api-context.js';
// Use a relative import for centralized logger
import { childLogger } from '../utils/logger.js';

export const test = base.extend({
  apiContext: async ({}, use) => {
    const context = await getApiContext();
    await use(context);
    await context.dispose();
  },

  apiResponse: async ({}, use) => {
    let response = null;
    const setResponse = (res) => { response = res; };
    const getResponse = () => response;
    await use({ setResponse, getResponse });
  },

  // Centralized logger fixture
  logger: async ({}, use, testInfo) => {
    const logger = childLogger(testInfo.title);
    await use(logger);
  },
});
