import { test,expect } from '@playwright/test';

import {loginPage} from "../tests/loginpage.po"

import logindata from "../testdata/logindata.json"

let login 

test.beforeEach(async ({page})=>{

    login = new loginPage(page)
    await login.launchURL()
})

test(`Login with valid credentials`, async ()=>{

    await login.loginwithCreds(logindata.username,logindata.password)
    await login.loginSuccess()
})

test(`Login with valid username and invalid password `, async ()=>{
   await login.loginwithCreds(logindata.username,logindata.wrongpassword)
   await login.loginfailed()

})

test(`Login with valid invalidusername and valid password `, async ()=>{
   await login.loginwithCreds(logindata.wrongusername,logindata.password)
   await login.loginfailed()
})