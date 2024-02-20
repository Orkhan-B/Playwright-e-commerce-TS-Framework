// GraphQL endpoint
import { request, expect } from '@playwright/test';
import { BASE_URL } from 'playwright.config';

/**
 * Specifies the URL endpoint for the GraphQL API.
 */
const GRAPHQL_ENDPOINT = '/graphql';

/**
 * Defines an `apiContext` object containing various configuration options for the API request,
 * such as baseURL, extraHTTPHeaders, httpCredentials, ignoreHTTPSErrors, proxy, storageState, timeout, and userAgent.
 */
const apiContext = {
  //properties that are left with placeholder 'string' need to be properly configured based on the actual requirements of the API.
  baseURL: BASE_URL,
  extraHTTPHeaders: {
    string: 'string'
  },
  httpCredentials: {
    username: 'string',
    password: 'string',
    origin: 'string'
  },
  ignoreHTTPSErrors: true,
  proxy: {
    server: 'string',
    bypass: 'string',
    username: 'string',
    password: 'string'
  },
  storageState: 'string',
  timeout: 15000,
  userAgent: 'string'
};

/**
 * This function takes a GraphQL query as input..
   - It makes a POST request to the specified GraphQL endpoint with the provided query.
   - After receiving the response, it expects that the response is OK (status code 200) and then parses and returns the JSON response.
 * @param query GraphQL query.
 * @returns parsed JSON response.
 */
export const getGraphResponse = async query => {
  const response = await (
    await request.newContext(apiContext)
  ).post(GRAPHQL_ENDPOINT, {
    data: {
      query: query
    }
  });
  await expect(response.ok()).toBeTruthy();
  await expect(response.status()).toBe(200);
  return await response.json();
};

/**
 * This code provides a convenient function for making GraphQL requests using Playwright.
 * It handles the creation of a context with specified configurations and performs assertions on the response before returning the parsed JSON data.
 * However, some properties in the `apiContext` object have placeholder values and need to be properly configured based on the actual requirements of the API.
 */
