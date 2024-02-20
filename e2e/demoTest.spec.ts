import test from '@helpers/BaseTest';
import { log } from 'console';

test.describe('Demo test', () => {
  test('Verify search page header has matching text', async ({
    page,
    onHomePage,
    onSearchPage
  }) => {
    await onHomePage.navigateToHomePage();
    await onHomePage.inHeader.clickOnSearchIcon();
    await onHomePage.inHeader.setValueToSearchInputField('shoes');
    await onSearchPage.assertUrl();
    await onSearchPage.assertHeadingValue('Search results for "shoes"');
  });
});
