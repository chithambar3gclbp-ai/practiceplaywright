import { test, expect } from '@playwright/test';


import fs from 'fs';
import path from 'path';


test.describe('File Upload and Download tests', () => {



test('File upload and download example', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/download');

        const [ download ] = await Promise.all([

            page.waitForEvent('download'),
            page.locator('//a[@href="download/puppy.png"]').click()
        ]);

        const suggestedFileName = download.suggestedFilename();

        const filePath = 'downloads/' + suggestedFileName;

        await download.saveAs(filePath);        

        expect(suggestedFileName).toBe('puppy.png');

       expect(fs.existsSync(filePath)).toBeTruthy();

})

test('download miltiple files and assert', async ({page})=>{

        await page.goto('https://the-internet.herokuapp.com/download');
        
       const downloadLinks = ['//a[@href="download/selenium-snapshot.png"]','//a[@href="download/luminoslogo.png"]','//a[@href="download/sample_media_file.png"]']
    for(let link of downloadLinks){
        
        const [ download ] = await Promise.all([

            page.waitForEvent('download'),
            
            page.locator(link).click()
        ]);

    

        const suggestedFileName = download.suggestedFilename();

        const filePath = 'downloads/' + suggestedFileName;

        await download.saveAs(filePath);        

        //expect(suggestedFileName).toBe('puppy.png');

        expect(fs.existsSync(filePath)).toBeTruthy();
    }

})




test('direct download and assert',async ({ page,request })=>{


    const imageUrl = ('https://apnamechanic.com/blog/wp-content/uploads/2022/06/bullet-service-online-1024x683-1.jpg')

    const response = await page.request.get(imageUrl);

    if(response.ok()){

        const buffer = await response.body();

        const downloadsFolder = path.join(__dirname + "/../..", 'downloads/');

        if (!fs.existsSync(downloadsFolder)) {
            fs.mkdirSync(downloadsFolder, { recursive: true });

        const savePath = path.join(downloadsFolder, 'bullet-service.jpg');

        fs.writeFileSync(savePath, buffer);
        console.log(`ile downloaded successfully and saved to ${savePath}`)
        } else {
            console.log(`ailed to download file. Status: ${response.status()}`)  

        }       

    }


})

})