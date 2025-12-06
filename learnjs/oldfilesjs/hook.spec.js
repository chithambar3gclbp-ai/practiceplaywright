import { test, expect } from '@playwright/test';
test.beforeAll(()=>{
    console.log("before each test")
} )


test.afterAll(()=>{
    console.log("after each test")
} )

test("test case 1", ()=>{

    console.log("test case1")
})

test("test case 2", ()=>{

    console.log("test case2")
})

test("test case 3", ()=>{

    console.log("test case3")
})