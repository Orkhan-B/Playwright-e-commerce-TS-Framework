import fs from 'fs';
import type { Locator, Page } from '@playwright/test';
import { BrowserContext, expect } from '@playwright/test';
import { aesDecrypt } from './Encription';

export class WebActionsHelper {
  protected page: Page;
  protected context: BrowserContext;

  /**
   *  Initializes the `page` and `context` properties with the provided `page` and `context` objects, representing a page and its browser context, respectively.
   * @param page
   * @param context
   */
  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }

  /**
   * An asynchronous method that decrypts a password using the `aesDecrypt` function. The password is fetched from the environment variable (`process.env.PREDEFINED_USER_PASSWORD`).
   */
  async decryptPassword(): Promise<string> {
    return await aesDecrypt(process.env.PREDEFINED_USER_PASSWORD);
  }

  /**
   * An asynchronous method that waits for a specified amount of time.
   * @param time Execution delay in milliseconds.
   */
  async wait(time: number): Promise<void> {
    return await new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }

  /**
   * An asynchronous method that reads the content of a text file given its file path.
   * @param filePath
   * @returns
   */
  async readValuesFromTextFile(filePath: string): Promise<string> {
    return fs.readFileSync(`${filePath}`, `utf-8`);
  }

  /**
   * An asynchronous method that navigates the browser page to the previous page.
   */
  async goBack() {
    await this.page.goBack();
  }

  /**
   * An asynchronous method that waits until the network becomes idle.
   */
  async waitForNetworkIdle() {
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * A protected asynchronous method used internally for clicking on an element.
     - It handles scenarios where the specified occurrence does not exist by clicking on the first occurrence and logging a message.
   * @param element Web element to click on.
   * @param nth It optionally takes a parameter `nth`, indicating which occurrence of the element to click if there are multiple occurrences.
   */
  protected async click(element: Locator, nth?: number) {
    if (nth) {
      if ((await element.count()) >= nth) {
        element = await element.nth(nth);
      } else {
        console.log(
          `Element count is less than: ${nth}.\nClicking on first element.`
        );
        element = await element.first();
      }
    }
    await element.waitFor({ state: 'visible' });
    await element.click();
  }

  /**
   * A protected asynchronous method used internally for entering a value into an element, like input field.
     - It waits for the element to be visible, then simulates typing the provided value into the element with a delay between each character.
   * @param element Element to type to
   * @param value value to type.
   * @param clickEnter optional, it pressing the 'Enter' key after finished typing sent value. Defaults to false.
   */
  protected async enterValue(
    element: Locator,
    value: string,
    clickEnter: boolean = false
  ) {
    await element.waitFor({ state: 'visible' });
    await element.pressSequentially(value, {
      delay: 100,
      noWaitAfter: false
    });
    clickEnter ? await element.press('Enter', { delay: 100 }) : null;
  }
}

/*
This class provides a set of helper methods to perform common actions on a web page, 
such as navigation, interaction with elements, waiting for certain conditions, and reading data from files. 
These methods are designed to be used within the context of a Playwright script for browser automation.
*/
