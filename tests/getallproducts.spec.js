import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto()
    const productnames = await page.locator().allTextContents()

  console.log(productnames)
})