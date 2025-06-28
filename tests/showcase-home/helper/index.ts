import { type Page } from "@playwright/test";
export async function goToShowcaseLibrary(page: Page) {
    await page.goto("/library/showcases");
}

export async function removeUpsellIfVisible(page: Page) {
    const upsellMessage = page.locator('text="Upgrade to unlock more video tools"');
    const isUpsellVisible = await upsellMessage.isVisible();
    if (isUpsellVisible) {
        const closeButton = page.locator('[data-testid="close-upsell-button"]');
        if (await closeButton.isVisible()) {
            await closeButton.click();
        }
    }
}

export async function removeOldShowcases(page: Page) {
    let actionCount = await page.locator('[data-testid="action-menu-button"]').count();
    while (actionCount > 0) {
        await page.click('[data-testid="action-menu-button"]');
        await page.click('//p[text()="Delete"]');
        await page.click('//button[text()="Delete"]');
        actionCount = await page.locator('[data-testid="action-menu-button"]').count();
    }
}

export async function createNewShowcase(page: Page, title: string, description: string) {
    await page.getByText("New showcase").click();
    await page.waitForTimeout(4000);
    await removeUpsellIfVisible(page);
    await page.waitForURL("**/showcases/**");
    await page.fill("#infoTitle", title);
    await page.fill("#infoDescription", description);
    await page.click('[data-id="desktop-view-save-btn"]');
}

export async function configureAppearance(page: Page) {
    await page.getByRole('button', { name: 'Appearance' }).click();
    await page.locator('div').filter({ hasText: /^LayoutDark mode$/ }).locator('span').first().click();
    await page.getByRole('img', { name: 'Playlist layout' }).locator('path').nth(1).click();
    await page.getByRole('img', { name: 'Default layout' }).locator('path').nth(1).click();
    await page.getByRole('button', { name: 'Save' }).click();
}

export async function deleteShowcaseIfExists(page: Page) {
    const saveButton = page.locator('[data-id="desktop-view-save-btn"]');
    if (await saveButton.isVisible()) {
        await page.getByRole("button", { name: "Cancel" }).click();
    }
    await page.getByRole("button", { name: "Delete showcase" }).click();
    await page.click('[data-id="delete-showcase-menu-item"]');
    await page.click('//button[text()="Delete"]');
    await page.waitForTimeout(4000);
}