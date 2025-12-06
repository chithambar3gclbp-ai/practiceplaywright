import { test, expect } from '@playwright/test';

//const { test, expect } = require('@playwright/test');

test.describe("group1", ()=>{
   
    test("test case 1", ()=>{
        console.log("this is test case 1")
       
    })
    test("test case 2", ()=>{
          console.log("this is test case 2")
    })

    test("test case 3", ()=>{
          console.log("this is test case 3")
    })

    test("test case 4", ()=>{
          console.log("this is test case 4")
    })

    test("test case 5", ()=>{
          console.log("this is test case 5")
    })

})