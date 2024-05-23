# Playwright Automation Framework

![1*gMiUPuRGC36nxZHe2zthOg](https://github.com/Orkhan-B/Playwright-e-commerce-TS-Framework/assets/142970025/ed06847c-d74d-43a1-8e9d-7d886ded7c97)


Welcome! this repository contains Playwright, TypeScript-based testing framework for e-commerce web application UI and API testing.
This framework follows the Page Object Model (POM) design pattern and includes various helper classes and modules to streamline your testing process.


## Features

```markdown
Page Object Model: Helps organize your test automation code, provides reusable and maintainable page objects.

- Helper Classes:

  - API Helpers:

    - REST  
       Functions provide a simple way to make RESTful API requests using Playwright's browser automation capabilities.
      However, launching a new browser instance for each request may not be efficient for making multiple requests in rapid succession.
      Consider refactoring to reuse the browser instance if making multiple requests within the same execution context.

    - GraphQL
      Code provides a convenient function for making GraphQL requests using Playwright.
      It handles the creation of a context with specified configurations and performs assertions on the response before returning the parsed JSON data.
      However, some properties in the `apiContext` object have placeholder values and need to be properly configured based on the actual requirements of the API.

  - Date Helper:
    These functions provide a wide range of functionalities for working with dates,
    such as getting month names, offsetting dates, getting the last day of the month,
    formatting dates, and more.
    They offer flexibility in manipulating and formatting dates according to different requirements.

  - Encryption Helper:
    Code provides two asynchronous functions for AES encryption and decryption using the `crypto-js` library.
    Both functions return promises that resolve to the encrypted or decrypted value.
    They rely on an encryption secret stored in the .env file `SECRET` environment variable to perform
    the encryption and decryption operations.

  - Random Test Data Generator:
    This module generates random user data, including personal information such as name, email, date of birth, address, phone number, and credit card information.
    The code heavily utilizes the `faker` library to generate realistic fake data across various categories like personal information, finance, internet, location, and more.
    Some parts of the code utilize environmental variables, such as `PREDEFINED_USER_PASSWORD` and `FAKER_EMAIL_DOMAIN` drom .env file.
    Overall, this code provides a convenient way to generate random user data for testing or other purposes, leveraging the `faker` library to ensure realistic data.

  - Web Actions Helper:
    This class provides a set of helper methods to perform common actions on a web page,
    such as navigation, interaction with elements, waiting for certain conditions, and reading data from files.
    These methods are designed to be used within the context of a Playwright script for browser automation.
```

## Libraries

```
  - Faker.js: Generate fake data for testing purposes.
  - Crypto-js: Handle encryption and decryption tasks securely.
  - Dotenv: Manage environment variables using a `.env` file.
  - Lodash: Utility functions for various common tasks.
```

## Reporting

```
  - Jira Xray Integration: Report test results directly to Jira Xray for comprehensive test management.
  - JUnit HTML Reporter: Generate HTML reports in JUnit format for easy analysis and sharing.
```

## CI/CD Integration

```
  - GitHub Actions Workflow (`main.yml`): Configure automated testing on scheduled runs and code pushes using GitHub Actions.
```

## IDE Integration

```
  - VS Code Code Snippets: Access boilerplate code snippets for creating POM classes and spec test files quickly.
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Orkhan-B/Playwright-e-commerce-TS-Framework.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Playwright Browsers:

   ```bash
   npx playwright install --with-deps
   ```

4. Set up environment variables by populating `.env` file with necessary variables:

   ```plaintext
   IS_MOBILE: true //runs tests in mobile chrome browser
   SECRET: 123Test // secret used to encrypt and decrypt data.
   ENV: test prefix for web address (test.yourdomain.dev)
   DOMAIN: dev //domain of the web application
   CI: false //determins wether to run TC's in ci mode(parallell execution)
   FAKER_EMAIL_DOMAIN: customdomain.com //domain used to create fake email addresses.
   PREDEFINED_USER_PASSWORD: encrypted user password
   ```

## Usage

1. Write your tests using TypeScript in the `e2e` directory.

2. Utilize page objects from the `PageObjects` directory for test organization.

3. Run tests locally:

   ```bash
   npm run test-ui
   ```

   Note: command allows you to run tests in headed mode (you can see test execution).

4. View test reports generated in the `reports` directory.

## Contributing

Thank you for considering contributing to this project! If you'd like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/new-feature
   ```

3. Commit your changes:

   ```bash
   git commit -am 'Add new feature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature/new-feature
   ```

5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
