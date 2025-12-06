const { test, expect } = require('@playwright/test');

test.describe('GreenCart - Verify Cart Total', () => {
  test('Add Broccoli and Cauliflower to cart and verify total price', async ({ page }) => {
    // Step 1: Navigate to GreenCart website
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    
    // Step 2: Get the prices of Broccoli and Cauliflower
    const broccoliSection = page.locator('h4:has-text("Brocolli - 1 Kg")').locator('..').locator('parent >> .. >> nth=0');
    const cauliflowerSection = page.locator('h4:has-text("Cauliflower - 1 Kg")').locator('..').locator('parent >> .. >> nth=0');
    
    // Extract Broccoli price
    const broccoliText = await page.locator('h4:has-text("Brocolli - 1 Kg")').evaluate(el => {
      return el.parentElement.innerText;
    });
    const broccoliPrice = parseInt(broccoliText.match(/₹\s*(\d+)/)[1]);
    
    // Extract Cauliflower price
    const cauliflowerText = await page.locator('h4:has-text("Cauliflower - 1 Kg")').evaluate(el => {
      return el.parentElement.innerText;
    });
    const cauliflowerPrice = parseInt(cauliflowerText.match(/₹\s*(\d+)/)[1]);
    
    console.log(`Broccoli Price: ₹${broccoliPrice}`);
    console.log(`Cauliflower Price: ₹${cauliflowerPrice}`);
    
    // Calculate expected total
    const expectedTotal = broccoliPrice + cauliflowerPrice;
    console.log(`Expected Total: ₹${expectedTotal}`);
    
    // Step 3: Add Broccoli to cart
    const addBroccoliButtons = await page.locator('button:has-text("ADD TO CART")');
    await addBroccoliButtons.nth(0).click(); // First product is Broccoli
    
    // Wait for button to change to "✔ ADDED"
    await page.locator('button:has-text("✔ ADDED")').first().waitFor({ state: 'visible' });
    
    // Step 4: Add Cauliflower to cart
    await addBroccoliButtons.nth(1).click(); // Second product is Cauliflower
    
    // Wait for second item to be added
    await page.waitForTimeout(500);
    
    // Step 5: Verify cart header shows correct items count and price
    const cartItems = await page.locator('strong').nth(0).textContent(); // Items count
    const cartPrice = await page.locator('strong').nth(1).textContent(); // Total price
    
    console.log(`Cart Items: ${cartItems}`);
    console.log(`Cart Price: ₹${cartPrice}`);
    
    expect(cartItems).toBe('2'); // 2 items added
    expect(parseInt(cartPrice)).toBe(expectedTotal);
    
    // Step 6: Click on Cart to view cart details
    await page.locator('img[alt="Cart"]').click();
    await page.waitForTimeout(500);
    
    // Step 7: Proceed to checkout to see detailed breakdown
    await page.locator('button:has-text("PROCEED TO CHECKOUT")').click();
    await page.waitForNavigation();
    
    // Step 8: Verify checkout page - Table details
    const tableRows = await page.locator('table tbody tr');
    const rowCount = await tableRows.count();
    
    expect(rowCount).toBe(2); // 2 product rows
    
    // Verify Broccoli row
    const broccoliRow = tableRows.nth(0);
    const broccoliRowText = await broccoliRow.textContent();
    expect(broccoliRowText).toContain('Brocolli - 1 Kg');
    expect(broccoliRowText).toContain('1'); // Quantity
    expect(broccoliRowText).toContain('120'); // Price and Total
    
    // Verify Cauliflower row
    const cauliflowerRow = tableRows.nth(1);
    const cauliflowerRowText = await cauliflowerRow.textContent();
    expect(cauliflowerRowText).toContain('Cauliflower - 1 Kg');
    expect(cauliflowerRowText).toContain('1'); // Quantity
    expect(cauliflowerRowText).toContain('60'); // Price and Total
    
    // Step 9: Verify total amount in summary
    // Extract the total amount from the page
    const pageText = await page.locator('body').textContent();
    const totalAmountMatch = pageText.match(/Total Amount\s*:\s*(\d+)/);
    const displayedTotal = parseInt(totalAmountMatch[1]);
    
    console.log(`Displayed Total Amount: ₹${displayedTotal}`);
    console.log(`Calculated Total (Broccoli + Cauliflower): ₹${expectedTotal}`);
    
    // Verify that displayed total equals sum of individual item prices
    expect(displayedTotal).toBe(expectedTotal);
    expect(displayedTotal).toBe(broccoliPrice + cauliflowerPrice);
    
    console.log('✅ Test Passed: Cart total is correctly calculated as sum of item prices');
  });
});
