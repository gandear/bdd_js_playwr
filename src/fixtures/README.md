# Playwright BDD + Custom Fixtures Integration

## Stable Configuration for playwright-bdd with Custom Fixtures

### 1. Package Dependencies

```json
{
  "devDependencies": {
    "playwright-bdd": "^8.3.1"
  },
  "dependencies": {
    "@playwright/test": "^1.54.0"
  }
}
```

### 2. Fixtures Definition

```javascript
// src/data/fixtures/pageFixtures.js
import { test as base } from 'playwright-bdd'; // ← Must be playwright-bdd

import { LoginPage } from '../../pages/LoginPage.js';
import { DashboardPage } from '../../pages/DashboardPage.js';

export const test = base.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },
});
```

### 3. Step Definitions

```javascript
// src/steps/ui/auth.steps.js
import { createBdd } from 'playwright-bdd';
import { test } from '../../data/fixtures/pageFixtures.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test); // ← Pass test object directly

Given('I am on the login page', async ({ loginPage }) => {
    await loginPage.goto();
});

When('I login with {string} and {string}', async ({ loginPage }, username, password) => {
    await loginPage.login(username, password);
});

Then('I should see the dashboard', async ({ dashboardPage }) => {
    await expect(dashboardPage.header).toBeVisible();
});
```

### 4. Playwright Configuration

```javascript
// playwright.config.js
import { defineConfig } from '@playwright/test';
import { defineBddProject } from 'playwright-bdd';

const bddProject = defineBddProject({
    name: 'BDD Tests',
    paths: ['tests/features/**/*.feature'],
    import: [
        'src/steps/ui/**/*.js',           // ← Step definitions
        'src/data/fixtures/pageFixtures.js', // ← CRITICAL: Include fixtures!
    ],
    use: {
        baseURL: 'https://your-app.com',
        headless: true,
    },
});

export default defineConfig({
    projects: [bddProject],
});
```

### 5. Scripts

```json
{
  "scripts": {
    "bddgen": "npx bddgen",
    "test:bdd": "npm run bddgen && npx playwright test"
  }
}
```

## Key Points ⚠️

1. **Fixtures MUST import from `playwright-bdd`** - not `@playwright/test`
2. **Include fixtures in `import` array** - this is the most common mistake
3. **Use `createBdd(test)`** - pass the test object directly (no destructuring)
4. **Run `bddgen` before tests** - to generate test files

## Common Errors & Solutions

| Error | Cause | Solution |
|-------|-------|----------|
| `Cannot read properties of undefined (reading 'fixtures')` | Wrong import in fixtures | Use `playwright-bdd` import |
| `unknown parameter "loginPage"` | Missing fixtures in config | Add fixtures to `import` array |
| `Can't guess test instance` | Fixtures not found | Include fixtures file in `import` |
| `should use 'test' extended from "playwright-bdd"` | Wrong test import | Import from fixtures, not @playwright/test |

## Project Structure

```
src/
├── data/
│   └── fixtures/
│       └── pageFixtures.js     # Custom fixtures
├── steps/
│   └── ui/
│       └── auth.steps.js       # Step definitions
└── pages/
    ├── LoginPage.js
    └── DashboardPage.js
tests/
└── features/
    └── ui/
        └── login.feature       # Feature files
```

This configuration ensures stable integration between playwright-bdd and custom fixtures.