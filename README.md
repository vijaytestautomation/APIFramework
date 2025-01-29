# Playwright API Automation Test Framework

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [Linting](#linting)
- [Contributing](#contributing)


## Introduction
This is the Framework used for native API testing using Playwright.

## Prerequisites
- [Node.js] - The framework is built using Node.js. 
- Use nvm to install Node v17
```Shell
nvm install 17
```
## Getting Started
To get started with the framework, follow these steps:
1. Clone this repository
2. Install Node.js as described in the Prerequisites section
3. Install the required dependencies defined in package.json

```Shell
npm install
```
## Folder Structure
- playwright-report: Playwright default HTML report assets, this folder git ignored.
- support: Common support utility methods.
- test-data: Test data for test flows and text messages for assertions, as we aim not to use hard-coded data in tests.
- test-results: It stores screenshots or videos generated during test execution, this folder is git ignored.
- tests: Contains all tests.

## Running Tests
- The [package.json](package.json) outlines the run commands for different environments.- 
- Replace the tag of "journey" in your command lines with "regression" or other tags which are target for different test groups.

### To run the tests for different envs, execute the following command:
- Different environmnets are handled in api-config.js and api-endpoints.js files

#### test (local run):
```Shell
## Use below script for any tests
npx playwright test ENV=tst deleteuser.spec.js

### To run the tests in DEBUG mode, execute a command like below:
```Shell
npx playwright test ENV=tst PWDEBUG=1 deleteuser.spec.js
```

## Test Reports
The HTML Reporter shows a full report of the tests allowing you to filter the report by
passed tests, failed tests, skipped tests and flaky tests. By default, the HTML report
is opened automatically if some tests failed, otherwise you can open it with the
following command.
```Shell
npx playwright show-report
```
## Linting

#### Automatically fix linting issues
```Shell
npm run lint:fix
```

## Contributing
We appreciate all contributions to this framework. If you'd like to contribute,
please reach out to Vijay Kumar.