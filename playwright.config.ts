import { defineConfig, devices } from '@playwright/test';
require('dotenv').config();
const xrayOptions = {
  // Whether to add <properties> with all annotations; default is false
  embedAnnotationsAsProperties: true,

  // By default, annotation is reported as <property name='' value=''>.
  // These annotations are reported as <property name=''>value</property>.
  textContentAnnotations: ['test_description'],

  // This will create a "testrun_evidence" property that contains all attachments. Each attachment is added as an inner <item> element.
  // Disables [[ATTACHMENT|path]] in the <system-out>.
  embedAttachmentsAsProperty: 'testrun_evidence',

  // Where to put the report.
  outputFile: './xray-report.xml'
};

const prefix = () => {
  switch (process.env.ENV) {
    case 'prod':
      return 'www';
    case 'test':
      return '';
    default:
      throw new Error(
        `Environment: ${process.env.ENV} not implemented in switch case.`
      );
  }
};

export const BASE_URL = `https://${prefix}.evershop.${process.env.DOMAIN}`;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: process.env.CI === 'true',
  retries: process.env.CI === 'true' ? 2 : 1,
  workers: process.env.CI === 'true' ? 1 : 1,
  reporter: [
    ['html', { open: 'never' }],
    ['junit'],
    ['./Helpers/TestRunLogger.ts'],
    ['@xray-app/playwright-junit-reporter', xrayOptions]
  ],
  timeout: 3 * 60 * 1000,
  expect: {
    timeout: 60 * 1000
  },

  use: {
    baseURL: BASE_URL,
    trace: 'retry-with-trace',
    video: 'on',
    screenshot: { mode: 'only-on-failure', fullPage: true },
    launchOptions: {
      headless: process.env.CI === 'true'
    }
  },
  projects:
    process.env.IS_MOBILE === 'true'
      ? [
          /* Mobile viewports. */
          {
            name: 'Mobile Chrome',
            use: { ...devices['Pixel 5'] }
          }
          // {
          //   name: 'Mobile Safari',
          //   use: { ...devices['iPhone 12'] }
          // }
        ]
      : [
          /* Desktop viewports. */
          {
            name: 'chromium',
            use: {
              ...devices['Desktop Chrome'],
              viewport: { width: 1900, height: 900 }
            }
          }
          // {
          //   name: 'Google Chrome',
          //   use: { ...devices['Desktop Chrome'], channel: 'chrome', viewport: { width: 1900, height: 900 } } // or 'chrome-beta'
          // }
          // {
          //   name: 'firefox',
          //   use: { ...devices['Desktop Firefox'], viewport: { width: 1900, height: 900 } }
          // },
          // {
          //   name: 'webkit',
          //   use: { ...devices['Desktop Safari'], viewport: { width: 1900, height: 900 } }
          // }
        ]
});
