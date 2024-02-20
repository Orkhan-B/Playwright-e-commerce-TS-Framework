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
export const BASE_URL = `https://${process.env.ENV}.evershop.${process.env.DOMAIN}`;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: process.env.CI === 'true',
  retries: process.env.CI === 'true' ? 2 : 1,
  workers: process.env.CI === 'true' ? 1 : 1,
  reporter: [['html'], ['@xray-app/playwright-junit-reporter', xrayOptions]],
  timeout: 60 * 1000,
  expect: {
    timeout: 60 * 1000
  },

  use: {
    baseURL: BASE_URL,
    trace: 'retry-with-trace',
    video: 'on',
    screenshot: 'only-on-failure',
    launchOptions: {
      headless: true
    }
  },

  projects: setProject()
});
function setProject() {
  return process.env.IS_MOBILE === 'true'
    ? [
        {
          name: 'Mobile Chrome',
          use: { ...devices['Pixel 5'] }
        }
      ]
    : [
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] }
        }
      ];

  /* Alternative options----------------------
  Desktop viewports---------------------------
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  Mmobile viewports---------------------------
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] }
    }
  */
}
