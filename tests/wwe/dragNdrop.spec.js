import { test, expect } from '@playwright/test'

test(`drag and drop examples`, async ({ page }) => {

   await page.goto('https://kitchen.applitools.com/ingredients/drag-and-drop')

//     await page.locator('#menu-fried-chicken').dragTo(page.locator('#plate-items'))
    
//     await page.locator('#menu-ice-cream').dragTo(page.locator('#plate-items'))

//     await page.locator('#menu-hamburger').dragTo(page.locator('#plate-items'))   

      const sourceitems = ['#menu-fried-chicken', '#menu-ice-cream', '#menu-hamburger']
        for(const item of sourceitems){
            await page.locator(item).dragTo(page.locator('#plate-items'))
        }

        // const sourceFriedChicken = page.locator('#menu-fried-chicken')
        // const sourceIceCream = page.locator('#menu-ice-cream')
        // const sourceHamburger = page.locator('#menu-hamburger')         
        // const targetPlateItems = page.locator('#plate-items')
        // await sourceFriedChicken.dragTo(targetPlateItems)
        // await sourceIceCream.dragTo(targetPlateItems)
        // await sourceHamburger.dragTo(targetPlateItems)          

})