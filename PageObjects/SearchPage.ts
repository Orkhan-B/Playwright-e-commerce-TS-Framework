import { WebActionsHelper } from '@helpers/WebActionsHelper';
import { Page, BrowserContext, Locator } from 'playwright';
import { expect } from 'playwright/test';
import { Footer } from './SharedModules/Footer';
import { Header } from './SharedModules/Header';

export class SearchPage extends WebActionsHelper {
  constructor(_page: Page, _context: BrowserContext) {
    super(_page, _context);
    this.inHeader = new Header(this.page, this.context);
    this.inFooter = new Footer(this.page, this.context);

    /*-----------------locators-----------------*/
    this.sortByDropdown = this.page.locator('.product-sorting-inner select');
    this.sortDirrectionArrowIcon = this.page.locator('.sort-direction > a');
    this.searchResultItems = this.page.locator('.listing-tem');
    this.productCount = this.page.locator('.product-count');
    this.productPaginationButtons = this.page.locator(
      '.products-pagination button'
    );
    this.breadCrumbs = this.page.locator('.my-2');
  }

  private URL = '/search';
  private TITLE = '';
  readonly inHeader: Header;
  readonly inFooter: Footer;

  //LOCATORS ===============================================================
  private sortByDropdown: Locator;
  private sortDirrectionArrowIcon: Locator;
  private searchResultItems: Locator;
  private productCount: Locator;
  private productPaginationButtons: Locator;
  private breadCrumbs: Locator;

  //ACTIONS ================================================================
  async navigateToSearchPage(): Promise<void> {
    await this.page.goto(this.URL);
  }

  async assertUrl(): Promise<void> {
    await expect(this.page.url()).toContain(this.URL);
  }

  async assertTitle(): Promise<void> {
    await expect(this.page).toHaveTitle(this.TITLE);
  }

  async assertHeadingValue(value: string) {
    await expect(this.page.getByRole('heading', { name: value })).toBeVisible();
  }

  async sortItems(option: 'Default' | 'Price' | 'Name') {
    await this.sortByDropdown.selectOption(option);
  }

  async clickOnSortDirrectionArrowIcon() {
    await this.click(this.sortDirrectionArrowIcon);
  }
  async clickOnSearchResultItemByIndex(index: number) {
    await this.click(this.searchResultItems, index);
  }
  async clickOnSearchResultItemByName(name: string) {
    await this.click(this.searchResultItems.filter({ hasText: name }));
  }

  async getProductCount(): Promise<string> {
    return await this.productCount.textContent();
  }

  async assertProductCount(expectedCount: string | number) {
    await expect(await this.productCount).toHaveText(`${expectedCount} products`);
  }

  async clickOnProductPaginationButtonByValue(value: string | number) {
    await this.click(
      this.productPaginationButtons.filter({ hasText: `${value}` })
    );
  }

  async clickOnProductPaginationButtonByindex(index: number) {
    await this.click(this.productPaginationButtons, index);
  }

  async assertBreadCrumbsHasText(expectedText: string) {
    await expect(this.breadCrumbs).toContainText(expectedText);
  }
}
