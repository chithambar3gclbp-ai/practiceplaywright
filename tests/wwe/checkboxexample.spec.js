import { test, expect } from '@playwright/test'


test(``, async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('#checkBoxOption1').check()
    const status_checkbox = await page.locator('#checkBoxOption1').isChecked()
    console.log(status_checkbox)
    if (status_checkbox) {
        await page.locator('#checkBoxOption1').uncheck()
        await page.locator('#checkBoxOption2').check()
    }
    else {
        await page.locator('#checkBoxOption1').check()
    }
    await expect(page.locator('#checkBoxOption1')).not.toBeChecked()
    await expect(page.locator('#checkBoxOption2')).toBeChecked()


})



test(`multiple check boxes`, async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('//input[@type="checkbox"]')

       const arr = ['#checkBoxOption1','#checkBoxOption2','#checkBoxOption3']

        for(let checkbox of arr){

            await page.locator(checkbox).check()

    }


})

test(`multiple check boxes 2`, async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    const checkboxes = await page.$$('//input[@type="checkbox"]')

    for (let checkbox of checkboxes) {

        await checkbox.check()

        await page.waitForTimeout(1000)

        //await expect(checkbox).toBeChecked()
    }

})



test(`multiple elements click`, async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

    const allelements = await page.$$('//div[@class="product-action"]')

    for (let addtocart of allelements) {

        await addtocart.click()
    }
})


test(`radio button`, async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    //await page.waitForTimeout(2000)
    await page.locator('//input[@name="radioButton"]').first().check()
    //await page.waitForTimeout(2000)
    await page.locator('//input[@name="radioButton"]').first().uncheck()
})
test.describe('handling alerts', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    })



    test('playwright test case - simple alert', async ({ page }) => {

        test.slow()

        page.locator('text=Click for JS Alert').click()

        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('I am a JS Alert')
            await dialog.accept()

         
       })
    
    
    })
    test('playwright test case - confirm alert', async ({ page }) => {

        test.slow()

        page.locator('text=Click For JS Confirm').click()

            page.on('dialog', async dialog => {
                expect(dialog.message()).toBe('I am a JS Confirm')
                await dialog.dismiss()

            })

        })
test('playwright test case - prompt and ', async ({ page }) => {

        test.slow()

        page.locator('text=Click for JS prompt').click()

        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('I am a JS prompt')
            await dialog.accept("parthavi")

        })
    })






    })







