import { createBdd } from 'playwright-bdd';
import { test } from '../../fixtures/api.fixture.js';
import { expect } from '@playwright/test';
import { sendRequest } from '../../utils/apiRequest.js';

const { Given, When, Then } = createBdd(test);

Given('I have a valid API endpoint', async ({ logger }) => {
  logger.info('API endpoint is ready');
});

Given('I send a {word} request to {string}', async ({ apiContext, apiResponse, logger }, method, url) => {
  logger.info(`Sending ${method} request to ${url}`);
  const { response, data } = await sendRequest(apiContext, method, url);
  logger.info('API response received', { method, url, status: response.status(), data });
  apiResponse.setResponse({ response, data });
});

Given('I send a {word} request to {string} with payload:', async ({ apiContext, apiResponse, logger }, method, url, docString) => {
  const payload = JSON.parse(docString);
  logger.info(`Sending ${method} request to ${url} with payload`, { payload });
  const { response, data } = await sendRequest(apiContext, method, url, payload);
  logger.info('API response received', { method, url, status: response.status(), data });
  apiResponse.setResponse({ response, data });
});

Then('the response status should be {int}', async ({ apiResponse, logger }, status) => {
  const { response } = apiResponse.getResponse();
  const actual = response.status();
  const passed = actual === status;
  logger.info('Status code verification', { expected: status, actual, passed });
  expect(actual).toBe(status);
});

Then('the response should have property {string}', async ({ apiResponse, logger }, property) => {
  const { data } = apiResponse.getResponse();
  const value = getNestedProperty(data, property);
  const passed = value !== undefined;
  logger.info(`Property "${property}" defined`, { passed });
  expect.soft(value).toBeDefined();
});

Then('the response should have property {string} with value {string}', async ({ apiResponse, logger }, property, expected) => {
  const { data } = apiResponse.getResponse();
  const actual = String(getNestedProperty(data, property));
  const passed = actual === expected;
  logger.info(`Property "${property}" equals string`, { expected, actual, passed });
  expect.soft(actual).toBe(expected);
});

Then('the response should have property {string} with value {int}', async ({ apiResponse, logger }, property, expected) => {
  const { data } = apiResponse.getResponse();
  const actual = getNestedProperty(data, property);
  const passed = actual === expected;
  logger.info(`Property "${property}" equals number`, { expected, actual, passed });
  expect.soft(actual).toBe(expected);
});

Then('the response should have property {string} as array', async ({ apiResponse, logger }, property) => {
  const { data } = apiResponse.getResponse();
  const value = getNestedProperty(data, property);
  const passed = Array.isArray(value);
  logger.info(`Property "${property}" is array`, { passed });
  expect.soft(passed).toBe(true);
});

Then('the response should have property {string} as string', async ({ apiResponse, logger }, property) => {
  const { data } = apiResponse.getResponse();
  const value = getNestedProperty(data, property);
  const passed = typeof value === 'string';
  logger.info(`Property "${property}" is string`, { passed });
  expect.soft(passed).toBe(true);
});

Then('the response should have property {string} as number', async ({ apiResponse, logger }, property) => {
  const { data } = apiResponse.getResponse();
  const value = getNestedProperty(data, property);
  const passed = typeof value === 'number';
  logger.info(`Property "${property}" is number`, { passed });
  expect.soft(passed).toBe(true);
});

Then('the response should be valid with all properties:', async ({ apiResponse, logger }, dataTable) => {
  const { data } = apiResponse.getResponse();
  const validations = dataTable.hashes();

  logger.info('Validating complete response structure');
  for (const { property, type, value } of validations) {
    const actualValue = getNestedProperty(data, property);
    expect.soft(actualValue, `Expected property "${property}" to exist`).toBeDefined();

    if (type) {
      switch (type) {
        case 'string':
          expect.soft(typeof actualValue, `Property "${property}" should be string`).toBe('string');
          break;
        case 'number':
          expect.soft(typeof actualValue, `Property "${property}" should be number`).toBe('number');
          break;
        case 'array':
          expect.soft(Array.isArray(actualValue), `Property "${property}" should be array`).toBe(true);
          break;
        case 'object':
          expect.soft(typeof actualValue, `Property "${property}" should be object`).toBe('object');
          break;
      }
    }

    if (value !== undefined) {
      expect.soft(actualValue, `Property "${property}" should have value "${value}"`).toBe(value);
    }

    logger.info(`Property "${property}" validation passed`, { property, type, value });
  }
});

// Helper to access nested properties
function getNestedProperty(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}
