import { BASE_URL } from 'playwright.config';
import { chromium } from 'playwright';

/**
 * Performs a GET request to the specified endpoint.
 * @param endpoint
 * @returns returns the response body as a string.
 */
export const restGet = async (endpoint: string): Promise<string> => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ baseURL: BASE_URL });
  const page = await context.newPage();

  await page.goto(endpoint);
  const responseBody = await page.content();
  await browser.close();

  return responseBody;
};

/**
 * Performs a POST request to the specified endpoint with provided data.
 * @param endpoint
 * @param data
 * @returns returns the response body as a string.
 */
export const restPost = async (endpoint: string, data): Promise<string> => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ baseURL: BASE_URL });
  const page = await context.newPage();

  await page.request.post(endpoint, { data: JSON.stringify(data) });
  const responseBody = await page.content();
  await browser.close();

  return responseBody;
};

/**
 * Performs a PUT request to the specified endpoint with provided data.
 * @param endpoint
 * @param data
 * @returns returns the response body as a string.
 */
export const restPut = async (endpoint, data): Promise<string> => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ baseURL: BASE_URL });
  const page = await context.newPage();

  await page.request.put(endpoint, { data: JSON.stringify(data) });
  const responseBody = await page.content();
  await browser.close();

  return responseBody;
};

/**
 * Performs a DELETE request to the specified endpoint with provided data.
 * @param endpoint
 * @param data
 * @returns returns the response body as a string.
 */
export const restDelete = async (endpoint: string, data): Promise<string> => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ baseURL: BASE_URL });
  const page = await context.newPage();

  await page.request.delete(endpoint, { data: data });
  const responseBody = await page.content();
  await browser.close();

  return responseBody;
};

/**
 * This functions provide a simple way to make RESTful API requests using Playwright's browser automation capabilities.
 * However, launching a new browser instance for each request may not be efficient for making multiple requests in rapid succession.
 * Consider refactoring to reuse the browser instance if making multiple requests within the same execution context.
 */
