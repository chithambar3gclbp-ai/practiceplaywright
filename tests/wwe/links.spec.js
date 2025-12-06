//import { test, expect } from '@playwright/test'

const { browser,test,expect} = require('@playwright/test');

test.describe(`automation with  links`, async ()=>{
   
    test(`playwright test with links`, async ({page})=>{
     
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await page.getByText('Forgot your password?').click()
        
         await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
        
         
         await expect(page.getByText('Reset Password').first()).toBeVisible()
        
         await expect(page.locator('//button[text()="Reset Password"]')).toBeVisible()
        
        
         //await expect(page.getByText('Reset Password')).toBeVisible()

       

        

})

})