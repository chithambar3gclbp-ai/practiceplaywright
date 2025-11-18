import { test, expect } from '@playwright/test';
for(let i=1; i<=10; i++){
test(`open website based on browser we choose - Switch ${i}`, async ({ page, }) => {
    const browserName = test.info().project.name;
    switch ('browsername') {
        case "chromium": {
            await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        }
        break;
        
        case "chrome": {
            await page.goto('https://www.flipkart.com/');

        }
        break;
        
        case "firefox": {
            await page.goto('https://www.myntra.com/');

        }
        break;
        
        case "webkit": {
            await page.goto('https://www.amazon.in/');

        }
        break;

        //  default:{
        //  console.log("no browser matched: " + browsername)

        // }
        //  break;
    }

});
}



// import { test, expect } from '@playwright/test';

// test('open website based on browser we choose - Switch', async ({ page }) => {

//   // Get browser name from project configuration
//   const browserName = test.info().project.name;

//   switch (browserName) {
//     case "chromium":
//       await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//       break;

//     case "chrome":
//       // Chrome also runs as chromium with channel: "chrome"
//       await page.goto('https://www.flipkart.com/');
//       break;

//     case "firefox":
//       await page.goto('https://www.myntra.com/');
//       break;

//     case "webkit":
//       await page.goto('https://www.amazon.in/');
//       break;

//     default:
//       console.log("No browser matched: " + browserName);
//       break;
//   }

//});
