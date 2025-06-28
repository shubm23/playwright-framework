import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({ storageState: 'storageState.json' });
    const page = await context.newPage();

    // Navigate to the desired page
    await page.goto('/library/showcases');

    // Devtools open lets you record manually
    await page.pause(); // ← This gives you Playwright Recorder UI
})();
