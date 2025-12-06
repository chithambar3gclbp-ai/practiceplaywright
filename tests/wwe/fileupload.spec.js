import { test, expect } from '@playwright/test'

test('file upload test', async ({ page }) => {

    await page.goto('https://blueimp.github.io/jQuery-File-Upload/')

    await page.locator('input[type="file"]').setInputFiles(['testdata/pexels-matthew.jpg','testdata/Picture1.jpg','testdata/Picture2.jpg'])

    await page.locator('(//button[@class="btn btn-primary start"])[1]').click()
    await page.locator('(//button[@class="btn btn-primary start"])[1]').click()
    await page.locator('(//button[@class="btn btn-primary start"])[1]').click()
    const checkboxes = await page.$$("checkbox")


    for (let checkbox of checkboxes) {
         await checkbox.check()

        await expect(page.locator('checkbox')).toBeChecked()
       
        //await expect(checkbox).toBeChecked()

    }

    // await page.locator('(//button[@class="btn btn-danger delete"])[4]').click()
    // await page.locator('(//button[@class="btn btn-danger delete"])[2]').click()
    // await page.locator('(//button[@class="btn btn-danger delete"])[3]').click()
 })