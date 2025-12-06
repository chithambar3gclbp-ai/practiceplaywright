import { test, expect } from '@playwright/test';

import swagdata from"../testdata/sawgdata.json"
test.describe("this is group1", ()=>{
   test('login with valid cred', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/v1/');

    await page.locator("input[name='user-name']").fill('swagdata.username');

    await page.locator("input[name='password']").fill('swagdata.password');

    await page.locator("input[type='submit']").click()

    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");

    await expect(page.locator("//div[normalize-space(text())='Products']")).toBeVisible()

})

test('login with valid cred2', async ({ page }) => {
    
    await page.goto('https://www.saucedemo.com/v1/');

    await page.locator("input[data-test='username']").fill('swagdata.username');

    await page.locator("input[data-test='password']").fill('swagdata.password');

    await page.locator("input[type='submit']").click()

    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");

    await expect(page.locator("//div[normalize-space(text())='Products']")).toBeVisible()

});


test('login with validusername and invalidpassword',{tag : "@smoke"}, async ({ page }) => {
    test.fixme()
    await page.goto('https://www.saucedemo.com/v1/');

    await page.locator("input[data-test='username']").fill('swagdata.username');

    await page.locator("input[data-test='password']").fill('swagdata.invalidpassword');

    await page.locator("input[type='submit']").click()

    await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()

    
});
})

test.describe("this is group2", ()=>{

test('login with invalidusername and validpassword', async ({ page }) => {

     await page.goto('https://www.saucedemo.com/v1/');

    await page.locator("input[data-test='username']").fill('swagdata.invalidusername');

    await page.locator("input[data-test='password']").fill('swagdata.password');

    await page.locator("input[type='submit']").click()

    await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()

});
test('login with invalidusername and invalidpassword', async ({ page }) => {

     await page.goto('https://www.saucedemo.com/v1/');

    await page.locator("input[data-test='username']").fill('swagdata.invalidusername');

    await page.locator("input[data-test='password']").fill('swagdata.invalidpassword');

    await page.locator("input[type='submit']").click()

    await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()

});
test('login without entering credentials', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/v1/');

    await page.locator("input[type='submit']").click()

    await expect(page.locator("//h3[contains(.,'Epic sadface: Username is required')]")).toBeVisible()


});
test.skip('login with lockedout user and validpassword', async ({ page }) => {

     await page.goto('https://www.saucedemo.com/v1/');

    await page.locator("input[data-test='username']").fill('swagdata.lockedun');

    await page.locator("input[data-test='password']").fill('swagdata.password');

    await page.locator("input[type='submit']").click()

    await expect(page.locator("//h3[contains(.,'Epic sadface: Sorry, this user has been locked out.')]")).toBeVisible()

});
test.skip('login with problem user and validpassword', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/v1/');

    await page.locator("input[data-test='username']").fill('swagdata.problemun');

    await page.locator("input[data-test='password']").fill('swagdata.password');

    await page.locator("input[type='submit']").click();
    
    await expect (page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")

    await expect(page.locator("//div[normalize-space(text())='Products']")).toBeVisible()

});
test.fail('login with performance glitch user and validpassword', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/v1/');

    await page.locator("input[data-test='username']").fill('swagdata.performanceun');

    await page.locator("input[data-test='password']").fill('swagdata.password');

    await page.locator("input[type='submit']").click();
    
    await expect (page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")

    await expect(page.locator("//div[normalize-space(text())='Products']")).toBeVisible()

});
   
})

