@echo off

echo Running Playwright Tests...
npx playwright test

echo Generating Allure Report...
allure generate allure-results --clean -o allure-report

echo Opening Allure Report...
allure serve allure-results

pause