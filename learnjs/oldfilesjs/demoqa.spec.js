 import { test, expect } from '@playwright/test';

test('Verify text box',{tag : "@smoke"}, async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  
  await page.getByRole('textbox', { name: 'Full Name' }).fill('chithambar p');

  await page.getByRole('textbox', { name: 'name@example.com' }).fill('chithambar.3gclbp@gmai.com');
  
  await page.getByRole('textbox', { name: 'Current Address' }).fill('banglore');

  await page.getByRole('textbox', { name: 'Current Address' }).fill('bangalore');
  
  await page.locator('#permanentAddress').fill('ananthapuramu');
  
  await page.getByRole('button', { name: 'Submit' }).click();
  
  await expect(page.getByText('Name:chithambar p')).toBeVisible();
  
  await expect(page.getByText('Email:chithambar.3gclbp@gmai.')).toBeVisible();
  
  await expect(page.getByText('Current Address :bangalore')).toBeVisible();
  
  await expect(page.getByText('Permananet Address :')).toBeVisible();

})