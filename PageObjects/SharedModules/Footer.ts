import { WebActionsHelper } from '@helpers/WebActionsHelper';
import { Page, BrowserContext, Locator } from 'playwright';
import { Header } from './Header';

export class Footer extends WebActionsHelper {
  constructor(_page: Page, _context: BrowserContext) {
    super(_page, _context);

    /*-----------------locators-----------------*/
    this.visaIcon = this.page
      .locator('.card-icons')
      .locator('svg[aria-labelledby="pi-visa"]');
    this.masterCardIcon = this.page
      .locator('.card-icons')
      .locator('svg[aria-labelledby="pi-master"]');
    this.payPalIcon = this.page
      .locator('.card-icons')
      .locator('svg[aria-labelledby="pi-paypal"]');
  }

  //LOCATORS ===============================================================
  private visaIcon: Locator;
  private masterCardIcon: Locator;
  private payPalIcon: Locator;

  //ACTIONS ================================================================
  async clickOnVisaIcon() {
    await this.click(this.visaIcon);
  }
  async clickOnaMsterCardIcon() {
    await this.click(this.masterCardIcon);
  }
  async clickOnPayPalIcon() {
    await this.click(this.payPalIcon);
  }
}
