import { test, expect } from '@playwright/test';

test('register redifmail account', async ({ page }) => {
    
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details'); 
    
    await page.locator("//input[@placeholder='Enter your full name']").fill('chithambaraiah p');

    await page.locator("//input[@placeholder='Enter Rediffmail ID']").fill('chithambar123');

    await page.locator("//input[@placeholder='Enter password']").fill('chithu@123');

    await page.locator("//input[@placeholder='Retype password']").fill('chithu@123');

    await page.locator("select.day").selectOption('15');

    await page.locator("//select[@class='middle month']").selectOption('OCT');

    await page.locator("select.year").selectOption('1996');

});