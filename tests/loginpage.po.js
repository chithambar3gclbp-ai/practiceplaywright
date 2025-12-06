import {expect} from "@playwright/test"

exports.loginPage = class loginPage{

    constructor(page){                        // it is also acts as a method, used to initialized values to the object properties
        this.page = page
        this.usernameInput = page.locator('//input[@name="user-name"]')
        this.passwordInput = page.locator('//input[@name="password"]')
        this.loginBtn = page.locator('//input[@type="submit"]')
        this.loginErrorMessage = page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")
    //h3[contains:(.,'Epic sadface: Username and password do not match any user in this service')]

    }
    
    async launchURL(){

        this.page.goto('https://www.saucedemo.com/')
    }

    async loginwithCreds(username,password){

        await this.usernameInput.fill('standard_user')

        await this.passwordInput.fill('secret_sauce')

        await this.loginBtn.click()


    }

    async loginSuccess(){

        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')

    }

    async loginfailed(){

        await expect(this.loginErrorMessage).toBeVisible()


    }



}

