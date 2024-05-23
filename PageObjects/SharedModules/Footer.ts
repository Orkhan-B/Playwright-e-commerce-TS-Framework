import { WebActionsHelper } from '@helpers/WebActionsHelper';
import { Page, BrowserContext, Locator } from 'playwright';
import { Header } from './Header';

export class Footer extends WebActionsHelper {
  constructor(_page: Page, _context: BrowserContext) {
    super(_page, _context);
  }

  //LOCATORS ===============================================================
  private visaIcon: Locator = this.page
    .locator('.card-icons')
    .locator('svg[aria-labelledby="pi-visa"]');
  private masterCardIcon: Locator = this.page
    .locator('.card-icons')
    .locator('svg[aria-labelledby="pi-master"]');
  private payPalIcon: Locator = this.page
    .locator('.card-icons')
    .locator('svg[aria-labelledby="pi-paypal"]');

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
