const { browser,test,expect} = require('@playwright/test');

test.describe(`automation with  iframes`, async ()=>{

test(`playwright test with iframes`, async ({page})=>{
    await page.goto('https://jqueryui.com/checkboxradio/')

    await page.frameLocator('//iframe[@class="demo-frame"]').locator('label[for="checkbox-1"]').check()





})




})