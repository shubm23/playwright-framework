import { defineConfig } from '@playwright/test';

export default defineConfig({
  globalSetup: require.resolve('./fixtures/globalSetup'),
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://vimeo.com',
    storageState: 'storageState.json',
  },
  reporter: [['html', { outputFolder: 'reports', open: 'never' }]],
});
