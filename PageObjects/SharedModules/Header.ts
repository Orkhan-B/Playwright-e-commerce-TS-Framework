import { WebActionsHelper } from '@helpers/WebActionsHelper';
import { BrowserContext, Locator, Page } from '@playwright/test';

export class Header extends WebActionsHelper {
  constructor(_page: Page, _context: BrowserContext) {
    super(_page, _context);

    /*-----------------locators-----------------*/
    this.logoIcon = this.page.locator('.logo-icon');
    this.searchIcon = this.page.locator('.search-icon');
    this.shopBagIcon = this.page.locator('a[href="/cart"]');
    this.userIcon = this.page.locator('a[href="/account/login"]');
    this.menPLPLink = this.page.getByRole('link', { name: 'Men', exact: true });
    this.womenPLPLink = this.page.getByRole('link', {
      name: 'Women',
      exact: true
    });
    this.searchInputField = this.page.getByPlaceholder('Search');
    this.searchModalCloseIcon = this.page.locator('.close-icon');
  } //constructor

  //LOCATORS ===============================================================
  private logoIcon: Locator;
  private searchIcon: Locator;
  private shopBagIcon: Locator;
  private userIcon: Locator;
  private menPLPLink: Locator;
  private womenPLPLink: Locator;
  private searchInputField: Locator;
  private searchModalCloseIcon: Locator;

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
