import { type Page } from "@playwright/test";
import { BasePage } from './base.page';

export class ShowcasePage extends BasePage {
    private newShowcaseBtn = this.page.getByRole('button', { name: 'New showcase' });
    private titleInput = this.page.locator('#infoTitle');
    private descInput = this.page.locator('#infoDescription');
    private saveBtn = this.page.locator('[data-id="desktop-view-save-btn"]');
    private confirmText = this.page.locator('text=Showcase created');
    private upsellModal = this.page.locator('text="Upgrade to unlock more video tools"');
    private closeUpsell = this.page.locator('[data-testid="close-upsell-button"]');

    async openShowcasePage() {
        await this.goto('/library/showcases');
    }

    async closeUpsellIfVisible() {
        if (await this.isVisible(this.upsellModal)) {
            if (await this.isVisible(this.closeUpsell)) {
                await this.click(this.closeUpsell);
            }
        }
    }

    async removeExistingShowcases() {
        await this.removeItems(
            '[data-testid="action-menu-button"]',
            '//p[text()="Delete"]',
            '//button[text()="Delete"]'
        );
    }

    async createShowcase() {
        await this.closeUpsellIfVisible();
        await this.removeExistingShowcases();
        await this.click(this.newShowcaseBtn);
    }

    async isShowcaseCreated() {
        return this.isVisible(this.confirmText);
    }
}
