import { test, expect } from '@playwright/test';

test('verify login and post something', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[placeholder='Username']").fill('Admin');

    await page.locator("input[placeholder='Password']").fill('admin123');

    await page.locator('//button[@type="submit"]').click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    await expect(page.locator("//a[@class='oxd-main-menu-item active']")).toBeVisible()

    await page.locator("//span[text()='Buzz']").click()

    await expect(page.locator("//span[@class='oxd-topbar-header-breadcrumb']//h6[1]")).toBeVisible()

    await page.locator('textarea.oxd-buzz-post-input').fill('hey,hii good morning')

    await page.locator("//button[@type='submit']").click()

    await page.locator("button[fdprocessedid='4iebr']").setInputFiles('testdata/pexels-matthew.jpg')

    await page.locator("button[fdprocessedid='jd1kg']").click()


});
