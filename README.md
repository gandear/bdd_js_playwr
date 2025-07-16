# BDD Playwright Project Documentation

## 1. README.md

### OrangeHRM BDD Test Automation

BDD test framework using Playwright and Cucumber for the OrangeHRM application.

#### Quick Start

```bash
npm install
npm run bddgen:clean
npm run test:ui
npm run test:api
```

#### Project Structure

- `src/features/` – Feature files (UI & API)
- `src/steps/` – Step definitions
- `src/pages/` – Page Object Models
- `src/fixtures/` – Test fixtures
- `src/utils/` – Common utilities
- `reports/` – Test reports

---

## 2. SETUP.md

### Initial Configuration

#### Dependencies

```bash
npm install
```

#### Environment Variables

Create `.env`:

```ini
UI_BASE_URL=https://opensource-demo.orangehrmlive.com
API_BASE_URL=https://reqres.in
API_KEY=reqres-free-v1
CI=false
```

#### Playwright Settings

- **UI Tests**: Headless, screenshot on failure, trace on retry
- **API Tests**: Custom headers, JSON accept
- **Reports**: HTML, Allure, List

#### Execution

```bash
# Generate BDD + run UI
npm run debug:ui

# Generate BDD + run API
npm run debug:api

# All tests
npm run debug:all
```

---

## 3. TESTING.md

### BDD Test Structure

#### Feature Files

```text
src/features/
├── ui/
│   ├── orangehrm-login.feature
│   └── orangehrm-pim.feature
└── api/
    ├── authentication.feature
    ├── user-crud.feature
    └── users-retrieval.feature
```

#### Step Definitions

```text
src/steps/
├── ui/
│   ├── orangehrm-auth.steps.js
│   └── orangehrm-pim.steps.js
└── api/
    └── api-common.steps.js
```

#### Naming Conventions

- **Feature files**: `kebab-case.feature`
- **Step files**: `kebab-case.steps.js`
- **Page objects**: `PascalCase.js`
- **Utils**: `camelCase.js`

#### Fixtures

- `page.fixture.js` – UI pages
- `api.fixture.js` – API clients

---

## 4. API.md

### Functions and Helpers

#### Page Objects

```javascript
// OrangeHrmLoginPage.js
class OrangeHrmLoginPage {
  async login(username, password)
  async isLoggedIn()
  async logout()
}

// OrangeHrmDashboardPage.js
class OrangeHrmDashboardPage {
  async navigateToModule(module)
  async getUserInfo()
}
```

#### API Utils

```javascript
// apiRequest.js
class ApiRequest {
  async get(endpoint)
  async post(endpoint, data)
  async put(endpoint, data)
  async delete(endpoint)
}
```

#### Common Utils

```javascript
// logger.js
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'app.log' })
  ]
});
```

---

## 5. DEPLOYMENT.md

### CI/CD Configuration

#### Available Scripts

```bash
# Cleanup + BDD generation
npm run bddgen:clean

# Test execution
npm run test:ui        # UI tests only
npm run test:api       # API tests only
npm run debug:all      # All tests headed

# Reports
npm run report:ui      # UI report
npm run report:api     # API report
```

#### Environment Variables

- `CI=true` – Enables `retry=2`, `workers=1`
- `UI_BASE_URL` – Base URL for UI tests
- `API_BASE_URL` – Base URL for API tests
- `API_KEY` – API key for authentication

#### Generated Reports

- **HTML**: `reports/html/`
- **Allure**: `allure-results/`
- **Test Results**: `reports/test-results/`

---

## 6. TROUBLESHOOTING.md

### Common Issues

#### BDD Generation Fails
```bash
# Clean and regenerate
npm run bddgen:clean
```

#### Intermittent Test Failures
- Check `retries: 2` in CI
- Check `trace: 'on-first-retry'`
- Check `screenshot: 'only-on-failure'`

#### API Tests Fail
- Check `API_BASE_URL` in `.env`
- Check `API_KEY` configuration
- Check network connectivity

#### UI Tests Fail
- Check `UI_BASE_URL` in `.env`
- Check browser compatibility
- Check element selectors

#### Performance Issues
- Adjust `workers` in config
- Use `fullyParallel: true`
- Optimize step definitions

#### Debugging
```bash
# Headed mode
npm run debug:ui

# Trace viewer
npx playwright show-trace trace.zip
``` 
