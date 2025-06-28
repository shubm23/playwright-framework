// pages/index.ts
import { Page } from '@playwright/test';
import { ShowcasePage } from './showcase.page.';

export const PageFactory = (page: Page) => ({
    showcasePage: new ShowcasePage(page),
});
