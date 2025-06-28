// pages/base.page.ts
import { Page, Locator } from '@playwright/test';

export class BasePage {
    constructor(protected readonly page: Page) { }

    async goto(path: string) {
        await this.page.goto(path);
    }

    async click(locator: Locator | string) {
        const el = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await el.waitFor({ state: 'visible' });
        await el.click();
    }

    async type(locator: Locator | string, value: string) {
        const el = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await el.fill(value);
    }

    async isVisible(locator: Locator | string) {
        const el = typeof locator === 'string' ? this.page.locator(locator) : locator;
        return await el.isVisible();
    }

    async removeItems(menuButtonSelector: string, confirmXpath: string, deleteXpath: string) {
        let actionCount = await this.page.locator(menuButtonSelector).count();
        while (actionCount > 0) {
            await this.page.click(menuButtonSelector);
            await this.page.click(confirmXpath);
            await this.page.click(deleteXpath);
            actionCount = await this.page.locator(menuButtonSelector).count();
        }
    }
}
