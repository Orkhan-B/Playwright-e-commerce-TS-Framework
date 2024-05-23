import { WebActionsHelper } from '@helpers/WebActionsHelper';
import { Page, BrowserContext, Locator } from 'playwright';
import { expect } from 'playwright/test';
import { Footer } from './SharedModules/Footer';
import { Header } from './SharedModules/Header';

export class SearchPage extends WebActionsHelper {
  constructor(_page: Page, _context: BrowserContext) {
    super(_page, _context);
  }

  private URL = '/search';
  private TITLE = '';
  readonly inHeader: Header = new Header(this.page, this.context);
  readonly inFooter: Footer = new Footer(this.page, this.context);

  //LOCATORS ===============================================================
  private sortByDropdown: Locator = this.page.locator(
    '.product-sorting-inner select'
  );
  private sortDirrectionArrowIcon: Locator = this.page.locator(
    '.sort-direction > a'
  );
  private searchResultItems: Locator = this.page.locator('.listing-tem');
  private productCount: Locator = this.page.locator('.product-count');
  private productPaginationButtons: Locator = this.page.locator(
    '.products-pagination button'
  );
  private breadCrumbs: Locator = this.page.locator('.my-2');

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
