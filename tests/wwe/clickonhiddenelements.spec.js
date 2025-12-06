 import { test, expect } from '@playwright/test'

test(`Login with valid credentials`, async ({page})=>{

    await page.goto('https://www.cypress.io/')
    await page.waitForTimeout(2000)
    await page.locator("//a[text()='Installing Cypress']").dispatchEvent('click')

  
})
test(`drop down value`, async ({page})=>{

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    await page.waitForTimeout(2000)
    //await page.locator('select[name^="DOB_Month"]').selectOption('MAR') //by text()

    //await page.locator('select[name^="DOB_Month"]').selectOption('06') //by value
    await page.locator('select[name^="DOB_Month"]').selectOption({index:9})//by index

})
