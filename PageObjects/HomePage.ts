import { WebActionsHelper } from '@helpers/WebActionsHelper';
import { Page, BrowserContext, Locator } from 'playwright';
import { expect } from 'playwright/test';
import { Footer } from './SharedModules/Footer';
import { Header } from './SharedModules/Header';

export class HomePage extends WebActionsHelper {
  /**
   * Initializes the page and context using constructor of the parent class `WebActionsHelper`.
   - Initializes instances of `Header` and `Footer` classes, representing the header and footer sections of the page respectively, using the provided page and context objects.
   */
  constructor(_page: Page, _context: BrowserContext) {
    super(_page, _context);
    this.inHeader = new Header(this.page, this.context);
    this.inFooter = new Footer(this.page, this.context);

    /*-----------------locators-----------------*/
    this.ELEMENT = this.page.locator('');
  }

  private URL = '';
  private TITLE = '';
  readonly inHeader: Header;
  readonly inFooter: Footer;

  //LOCATORS ===============================================================
  private ELEMENT: Locator; //Private property defining a locator for an element on the page.

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
