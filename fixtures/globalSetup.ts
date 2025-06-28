import { chromium, request } from '@playwright/test';

async function globalSetup() {
    const requestContext = await request.newContext();
    await requestContext.post('https://vimeo.com/', {
        form: {
            user: 'shubuchiha1997@gmail.com',
            password: '$Hubham234'
        }
    });
    const browser = await chromium.launch({
        headless: false
    });
    const page = await browser.newPage();

    // Simulate login or session creation on Vimeo (adjust selectors as needed)
    await page.goto('https://vimeo.com/log_in');
    await page.fill("#email_login", "shubuchiha1997@gmail.com");
    await page.fill("#password_login", "$Hubham234");
    await page.waitForTimeout(4000);
    await page.getByRole('button', {
        name: 'Log in with an email'
    }).click();
    await page.waitForURL('**/');
    await page.waitForTimeout(4000);

    // Save storage state
    await page.context().storageState({ path: 'storageState.json' });
    await browser.close();
}

export default globalSetup;