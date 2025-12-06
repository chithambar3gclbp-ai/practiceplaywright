import { test, expect } from '@playwright/test';

const creds = {
     username:"Admin",
     password:"admin123"
 }
 test.describe("group1", ()=>{
 test.afterEach( ()=>{
// code to deleting relavant  employee after confirming
 })
 test(`verify add employee -1`,async ({ page }) => {
      
      await page.goto('https://www.orangehrm.com/')
 
      await page.locator("//input[@name='username']").fill(creds.username);
 
      await page.locator("//input[@type='password']").fill(creds.password);
 
      await page.locator("button[type='submit']").click()
 
      await expect(page.locator('//a[@href="/web/index.php/dashboard/index"]')).toBeVisible()
 
      await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()
 
      await page.locator("//a[text()='Add Employee']").click()
 
      await page.locator('//input[@name="firstName"]').fill("parthavi")
 
      await page.locator('//input[@name="lastName"]').fill("pullagura")
 
      await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').clear()
 
      await page.locator('//input[@class="oxd-input oxd-input--focus"]').fill("8203v")
 
      await page.locator('//button[@type="submit"]').click()
 
 
 
      await expect(page.locator('//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"]')).toBeVisible()
 
 
 })
 

 test(`verify add employee -2`,async ({ page }) => {
      
      await page.goto('https://www.orangehrm.com/')
 
      await page.locator("//input[@name='username']").fill(creds.username);
 
      await page.locator("//input[@type='password']").fill(creds.password);
 
      await page.locator("button[type='submit']").click()
 
      await expect(page.locator('//a[@href="/web/index.php/dashboard/index"]')).toBeVisible()
 
      await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()
 
      await page.locator("//a[text()='Add Employee']").click()
 
      await page.locator('//input[@name="firstName"]').fill("vignesh")
 
      await page.locator('//input[@name="lastName"]').fill("pullagura")
 
      await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').clear()
 
      await page.locator('//input[@class="oxd-input oxd-input--focus"]').fill("8204v")
 
      await page.locator('//button[@type="submit"]').click()
 
 
 
      await expect(page.locator('//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"]')).toBeVisible()
 
 
 })
 

 test(`verify add employee -3`,async ({ page }) => {
      
      await page.goto('https://www.orangehrm.com/')
 
      await page.locator("//input[@name='username']").fill(creds.username);
 
      await page.locator("//input[@type='password']").fill(creds.password);
 
      await page.locator("button[type='submit']").click()
 
      await expect(page.locator('//a[@href="/web/index.php/dashboard/index"]')).toBeVisible()
 
      await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()
 
      await page.locator("//a[text()='Add Employee']").click()
 
      await page.locator('//input[@name="firstName"]').fill("ganesh")
 
      await page.locator('//input[@name="lastName"]').fill("pullagura")
 
      await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').clear()
 
      await page.locator('//input[@class="oxd-input oxd-input--focus"]').fill("8205v")
 
      await page.locator('//button[@type="submit"]').click()
 
 
 
      await expect(page.locator('//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"]')).toBeVisible()
 
 
 })


 })
 
    

 
 

 test(`verify add employee -4`,async ({ page }) => {
      
      await page.goto('https://www.orangehrm.com/')
 
      await page.locator("//input[@name='username']").fill(creds.username);
 
      await page.locator("//input[@type='password']").fill(creds.password);
 
      await page.locator("button[type='submit']").click()
 
      await expect(page.locator('//a[@href="/web/index.php/dashboard/index"]')).toBeVisible()
 
      await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()
 
      await page.locator("//a[text()='Add Employee']").click()
 
      await page.locator('//input[@name="firstName"]').fill("ganesh")
 
      await page.locator('//input[@name="lastName"]').fill("pullagura")
 
      await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').clear()
 
      await page.locator('//input[@class="oxd-input oxd-input--focus"]').fill("8205v")
 
      await page.locator('//button[@type="submit"]').click()
 
 
 
      await expect(page.locator('//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"]')).toBeVisible()
 
 
 })
 

 test(`verify add employee -5`,async ({ page }) => {
      
      await page.goto('https://www.orangehrm.com/')
 
      await page.locator("//input[@name='username']").fill(creds.username);
 
      await page.locator("//input[@type='password']").fill(creds.password);
 
      await page.locator("button[type='submit']").click()
 
      await expect(page.locator('//a[@href="/web/index.php/dashboard/index"]')).toBeVisible()
 
      await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()
 
      await page.locator("//a[text()='Add Employee']").click()
 
      await page.locator('//input[@name="firstName"]').fill("ganesh")
 
      await page.locator('//input[@name="lastName"]').fill("pullagura")
 
      await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').clear()
 
      await page.locator('//input[@class="oxd-input oxd-input--focus"]').fill("8205v")
 
      await page.locator('//button[@type="submit"]').click()
 
 
 
      await expect(page.locator('//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"]')).toBeVisible()
 
 
 })
 

 test(`verify add employee -6`,async ({ page }) => {
      
      await page.goto('https://www.orangehrm.com/')
 
      await page.locator("//input[@name='username']").fill(creds.username);
 
      await page.locator("//input[@type='password']").fill(creds.password);
 
      await page.locator("button[type='submit']").click()
 
      await expect(page.locator('//a[@href="/web/index.php/dashboard/index"]')).toBeVisible()
 
      await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()
 
      await page.locator("//a[text()='Add Employee']").click()
 
      await page.locator('//input[@name="firstName"]').fill("ganesh")
 
      await page.locator('//input[@name="lastName"]').fill("pullagura")
 
      await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').clear()
 
      await page.locator('//input[@class="oxd-input oxd-input--focus"]').fill("8205v")
 
      await page.locator('//button[@type="submit"]').click()
 
 
 
      await expect(page.locator('//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"]')).toBeVisible()
 
 
 })
 