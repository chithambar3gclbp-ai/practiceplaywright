import { test, expect } from '@playwright/test';
const creds = {
    username:"Admin",
    password:"admin123"
}

const employees={
    emp1:{
        firstname:"parthavi",
        lastname:"p",
        empid:"43246p"   
    },
     emp2:{
        firstname:"vignesh",
        lastname:"p",
        empid:"43247v"   
    },
     emp3:{
        firstname:"radhika",
        lastname:"p",
        empid:"43248r"   
    }
}
for(let employee in employees){
test(`verify add employee -${employees[employee].firstname}`,async ({ page }) => {
     
     await page.goto('/web/index.php/auth/login');

     await page.locator("input[name='username']").fill(creds.username);

     await page.locator("input[type='password']").fill(creds.password);

     await page.locator("button[type='submit']").click()

     await expect(page.locator('//a[@href="/web/index.php/dashboard/index"]')).toBeVisible()

     await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()

     await page.locator("//a[text()='Add Employee']").click()

     await page.locator('//input[@name="firstName"]').fill(employees[employee].firstname)

     await page.locator('//input[@name="lastName"]').fill(employees[employee].lastname)

     await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').clear()

     await page.locator('//input[@class="oxd-input oxd-input--focus"]').fill(employees[employee].empid)

     await page.locator('//button[@type="submit"]').click()



     await expect(page.locator('//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"]')).toBeVisible()


})

}
// test('verify ',async ({ page }) => {
     
//      await page.goto('/web/index.php/auth/login');

//      await page.locator("input[name='username']").fill(creds.username);

//      await page.locator("input[type='password']").fill(creds.password);

//      await page.locator("button[type='submit']").click()

//      await expect(page.locator('//a[@class="oxd-main-menu-item active"]')).toBeVisible()

//      await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()

//      await page.locator("//a[text()='Add Employee']").click()

//      await page.locator('//input[@name="firstName"]').fill("parthavi")

//      await page.locator('//input[@name="lastName"]').fill("p")

//      await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').clear()

//      await page.locator('//input[@class="oxd-input oxd-input--focus"]').fill('43246')

//      await page.locator('//button[@type="submit"]').click()



//      await expect(page.locator('//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"]')).toBeVisible()


// })