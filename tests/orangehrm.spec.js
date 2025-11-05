import { test, expect } from '@playwright/test';

test('verify login',async ({ page }) => {
     
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

     await page.locator("input[name='username']").fill('Admin')

     await page.locator("input[type='password']").fill('admin123')

     await page.locator("button[type='submit']").click()

})

test('add job title', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle');

await page.locator("input[fdprocessedid='10txoq']").fill('test engineer');

await page.locator("(//textarea[contains(@class,'oxd-textarea oxd-textarea--active')])[1]").fill('test engineer test hgfdhy');

await page.locator("div.oxd-file-div.oxd-file-div--active").selectOption('jpg format');

await page.locator("textarea[placeholder='Add note']").fill('abcdefgh');

await page.locator("button[type='submit']").click();


});

