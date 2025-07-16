import { defineConfig } from '@playwright/test';
import { defineBddProject } from 'playwright-bdd';
import * as dotenv from 'dotenv';
dotenv.config();
import path from 'path';

const bddUi = defineBddProject({
  name: 'OrangeHRM UI Tests',
  paths: ['src/features/ui/**/*.feature'],
  import: [
    'src/steps/ui/**/*.js',
    'src/fixtures/page.fixture.js',
  ],
  use: {
    baseURL: process.env.UI_BASE_URL || 'https://opensource-demo.orangehrmlive.com',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    logger: undefined, 
  },
});

const bddApi = defineBddProject({
  name: 'OrangeHRM API Tests',
  paths: ['src/features/api/**/*.feature'],
  import: [
    'src/steps/api/**/*.js',
    'src/fixtures/api.fixture.js',
  ],
  use: {
    baseURL: process.env.API_BASE_URL || 'https://reqres.in',
    extraHTTPHeaders: {
      'Accept': 'application/json',
      'x-api-key': process.env.API_KEY || 'reqres-free-v1',
    },
    logger: undefined, 
  },
});

export default defineConfig({
  globalSetup: './src/setup/globalSetup.js',
  globalTeardown: './src/setup/globalTeardown.js',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  outputDir: 'reports/test-results/',

  use: {
    baseURL: process.env.UI_BASE_URL || 'https://opensource-demo.orangehrmlive.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    launchOptions: {
      env: { ...process.env },
    },
    logger: undefined, 
  },

  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }],
    // ['json', { outputFile: 'reports/json/report.json' }]
  ],

  projects: [
    bddUi,
    bddApi,
  ],
});
