import { WebActionsHelper } from '@helpers/WebActionsHelper';
import { Page, BrowserContext, Locator } from 'playwright';
import { expect } from 'playwright/test';
import { Footer } from './SharedModules/Footer';
import { Header } from './SharedModules/Header';

export class HomePage extends WebActionsHelper {
  constructor(_page: Page, _context: BrowserContext) {
    super(_page, _context);
  }

  private URL = '';
  private TITLE = '';
  readonly inHeader: Header = new Header(this.page, this.context);
  readonly inFooter: Footer = new Footer(this.page, this.context);

  //LOCATORS ===============================================================
  private ELEMENT: Locator = this.page.locator('');

  //ACTIONS ================================================================
  /**
   * Navigates to the home page with the URL specified in the `URL` property.
   */
  async navigateToHomePage(): Promise<void> {
    await this.page.goto(this.URL);
  }

  /**
   * Asserts that the current URL matches the URL specified in the `URL` property.
   */
  async assertUrl(): Promise<void> {
    await expect(this.page).toHaveURL(this.URL);
  }

  /**
   * Asserts that the current page title matches the title specified in the `TITLE` property.
   */
  async assertTitle(): Promise<void> {
    await expect(this.page).toHaveTitle(this.TITLE);
  }
}
/**
 * This TypeScript class extends `WebActionsHelper` and represents a page object for a page in a web application.
 * Inherits functionalities from the `WebActionsHelper` class, enabling it to utilize methods such as `decryptPassword`, `wait`, `readValuesFromTextFile`, etc., for performing web actions.
 * Overall, this class encapsulates the functionalities and properties related to the page of the web application, including navigation, assertion of URL and title,
 * and interaction with header and footer components.
 */
