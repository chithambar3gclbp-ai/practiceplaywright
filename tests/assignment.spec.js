import { test, expect } from '@playwright/test';

test('verify add job title', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("input[name='username']").fill('Admin')

    await page.locator("input[type='password']").fill('admin123')

    await page.locator("button[type='submit']").click()
    
    await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click()

    await expect(page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[1]")).toBeVisible()

    await page.locator("(//i[@class='oxd-icon bi-chevron-down'])[2]").click()

    await page.locator("//a[normalize-space(text())='Job Titles']").click()

    await expect(page.locator("div.orangehrm-header-container")).toBeVisible()

    await page.locator("//button[contains(.,'Add')]").click()

    await expect(page.locator("//h6[text()='Add Job Title']")).toBeVisible()

    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill('test engineer11')

    await page.locator("(//textarea[contains(@class,'oxd-textarea oxd-textarea--active')])[1]").fill('testing activities')


    await page.locator("//textarea[@placeholder='Add note']").fill("we should test all")
    
    await page.locator("//button[@type='submit']").click()

    
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")


    
});

test('verify add job title with browse', async ({ page }) =>  {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("input[name='username']").fill('Admin')

    await page.locator("input[type='password']").fill('admin123')

    await page.locator("button[type='submit']").click()
    
    await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click()

    await expect(page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[1]")).toBeVisible()

    await page.locator("(//i[@class='oxd-icon bi-chevron-down'])[2]").click()

    await page.locator("//a[normalize-space(text())='Job Titles']").click()

    await expect(page.locator("div.orangehrm-header-container")).toBeVisible()

    await page.locator("//button[contains(.,'Add')]").click()

    await expect(page.locator("//h6[text()='Add Job Title']")).toBeVisible()

    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill('test engineer12')

    await page.locator("(//textarea[contains(@class,'oxd-textarea oxd-textarea--active')])[1]").fill('testing activities')

    await page.locator('//input[@type="file"]').setInputFiles('testdata/pexels-matthew.jpg')

    await page.locator("//textarea[@placeholder='Add note']").fill("we should test all")
    
    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")

    
});

test('verify pay grades', async ({ page }) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("input[name='username']").fill('Admin')

    await page.locator("input[type='password']").fill('admin123')

    await page.locator("button[type='submit']").click()
    
    await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click()

    await expect(page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[1]")).toBeVisible()

    await page.locator("(//i[@class='oxd-icon bi-chevron-down'])[2]").click()

    await page.locator("//a[normalize-space(text())='Pay Grades']").click()

    await expect(page.locator("//h6[text()='Pay Grades']")).toBeVisible()

    await page.locator("//button[contains(.,'Add')]").click()

    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill('parthu')

    await page.locator('//button [@type="submit"] ').click()


})

test('employment status', async ({ page }) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("input[name='username']").fill('Admin')

    await page.locator("input[type='password']").fill('admin123')

    await page.locator("button[type='submit']").click()
    
    await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click()

    await expect(page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[1]")).toBeVisible()

    await page.locator("(//i[@class='oxd-icon bi-chevron-down'])[2]").click()

    await page.locator("//a[normalize-space(text())='Employment Status']").click()

    await page.locator("//h6[text()='Employment Status']").toBeVisible()
    
    await page.locator("//button[contains(.,'Add')]").click()

    await expect(page.locator("//h6[text()='Add Employment Status']")).toBeVisible()

    await page.locator("//label[normalize-space(text())='Name']/following::input").fill('vignesh')

    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus")


});

test('job categories', async ({ page }) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("input[name='username']").fill('Admin')

    await page.locator("input[type='password']").fill('admin123')

    await page.locator("button[type='submit']").click()
    
    await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click()

    await expect(page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[1]")).toBeVisible()

    await page.locator("(//i[@class='oxd-icon bi-chevron-down'])[2]").click()
    
    await page.locator("//a[normalize-space(text())='Job Categories']").click() 
    
    await expect(page.locator("//h6[text()='Job Categories']")).toBeVisible()

    await page.locator("//button[contains(.,'Add')]").click()
    
    await expect(page.locator("//h6[text()='Add Job Category']")).toBeVisible()

    await page.locator("//label[normalize-space(text())='Name']/following::input").fill('test workers')

    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobCategory")


});


    test('work shifts', async ({ page }) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("input[name='username']").fill('Admin')

    await page.locator("input[type='password']").fill('admin123')

    await page.locator("button[type='submit']").click()
    
    await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click()

    await expect(page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[1]")).toBeVisible()

    await page.locator("(//i[@class='oxd-icon bi-chevron-down'])[2]").click()
    
    

});