import { test as base } from '@playwright/test';

// Extend base test to include a custom value
const test = base.extend<{
  myCustomValue: string;
}>({
  myCustomValue: async ({}, use) => {
    const value = '🔥 Hello from fixture!';
    await use(value);
  },
});

export { test };
