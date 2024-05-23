import { WebActionsHelper } from '@helpers/WebActionsHelper';
import { BrowserContext, Locator, Page } from '@playwright/test';

export class Header extends WebActionsHelper {
  constructor(_page: Page, _context: BrowserContext) {
    super(_page, _context);
  }

  //LOCATORS ===============================================================
  private logoIcon: Locator = this.page.locator('.logo-icon');
  private searchIcon: Locator = this.page.locator('.search-icon');
  private shopBagIcon: Locator = this.page.locator('a[href="/cart"]');
  private userIcon: Locator = this.page.locator('a[href="/account/login"]');
  private menPLPLink: Locator = this.page.getByRole('link', {
    name: 'Men',
    exact: true
  });
  private womenPLPLink: Locator = this.page.getByRole('link', {
    name: 'Women',
    exact: true
  });
  private searchInputField: Locator = this.page.getByPlaceholder('Search');
  private searchModalCloseIcon: Locator = this.page.locator('.close-icon');

  //ACTIONS ================================================================
  async clickOnLogoIcon() {
    await this.click(this.logoIcon);
  }
  async clickOnSearchIcon() {
    await this.click(this.searchIcon);
  }
  async clickOnShopBagIcon() {
    await this.click(this.shopBagIcon);
  }
  async clickOnUserIcon() {
    await this.click(this.userIcon);
  }
  async clickOnMenPLPLink() {
    await this.click(this.menPLPLink);
  }
  async clickOnWomenPLPLink() {
    await this.click(this.womenPLPLink);
  }
  async clickOnSearchInputField() {
    await this.click(this.searchInputField);
  }
  async setValueToSearchInputField(value: string) {
    await this.enterValue(this.searchInputField, value, true);
  }
  async clickOnSearchModalCloseIcon() {
    await this.click(this.searchModalCloseIcon);
  }
}
