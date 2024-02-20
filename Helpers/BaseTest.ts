import { HomePage } from '@pages/HomePage';
import { SearchPage } from '@pages/SearchPage';
import { test as baseTest } from '@playwright/test';

const test = baseTest.extend<{
  onHomePage: HomePage;
  onSearchPage: SearchPage;
}>({
  onHomePage: async ({ page, context }, use) => {
    await use(new HomePage(page, context));
  },
  onSearchPage: async ({ page, context }, use) => {
    await use(new SearchPage(page, context));
  }
});

export default test;

/*
This code is for setting up Playwright tests using Playwright Test framework. 

1. Imports:
   - The code imports necessary modules and classes from other files such as `LoginPage`, `HomePage`, etc. 
   These modules contain page objects for different pages of a web application.

2. Test Extension:
   - It defines a custom test function using the `baseTest.extend` method provided by Playwright Test.
   - The function is extended with additional functionality related to various pages and actions within the test environment.
   - Each key in the object passed to `extend` represents a fixture that will be added to the test environment.
   - Each fixture is defined as an asynchronous function that sets up an instance of a page object associated with a specific page or action within the test environment.

3. Fixture Setup:
   - Each fixture function takes parameters such as `page` and `context`, and returns an instance of the corresponding page object.
   - Inside each fixture function, an instance of the respective page object is created and initialized with the `page` and `context` provided by Playwright Test.
   - The created page object instance is then passed to the `use` function, which makes it available to tests that utilize this fixture.

4. Export:
   - The `test` object, which contains all the fixtures, is exported as the default export.
    This makes it available for use in test files where it can be used to write tests with access to the defined fixtures.


In summary, this code sets up fixtures for different page objects and actions within a Playwright Test environment, 
allowing tests to interact with various pages of a web application. 
These fixtures are then exported for use in writing actual tests.
*/
