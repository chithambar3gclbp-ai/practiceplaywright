const { browser,test,expect} = require('@playwright/test');

test.describe(`automation with  shadowdom`, async ()=>{

test(`playwright test with shadowroots`, async ({page})=>{
    await page.goto('http://watir.com/examples/shadow_dom.html')

    await page.locator('input[type="text"]').fill('pavani')
})

})
