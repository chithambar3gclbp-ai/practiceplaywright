
//synchronous-Means

//execute the statements one by one ( one after another)

// console.log("parthu")

// console.log("vignesh")

// console.log("ganesh")

// javascript synchronous

// //callback function

// function printnameBindu(){

//     console.log("bindu")

// }

// function printnameVidya(){

//     console.log("vidya")
//     printStatement()
// }

// function printnameKrish(z){

//     console.log("krish")
//     console.log(z)

// }


// function printStatement(x,y,callback){

//     console.log("this is the main function")
//     printnameBindu()
//     console.log(x)
//     console.log(y)
//     let stuname = "parthu"
//     callback(stuname)
// }

// printStatement(5,2,printnameKrish)

//printnameVidya(8,5)


//higher order function --which accepts another function as parameter


//ex: printstatement

//callback function -- a function which we are passing as parameter to the higher order function

//EX: printnamekrish

 //add = () => console.log(5+7)   // add function
 
 
 //() => console.log(5+7)   //ananymous function

 //setTimeout( () => console.log(5+7), 3000 )

//  console.log("parthu")

// setTimeout(() => console.log("vignesh"),4000)

//  console.log("ganesh")

//() => console.log("vignesh")



// ()=> {}

//function () {}    

//test("verify launch url", () => console.log("vignesh"))

//test("verify launch url", () => {})

//test("verify launch url",function () {})

//closure function

// function add(num1,num2){

//     console.log(num1+num2)
// }

// function multiply(num1,num2){

//     console.log(num1*num2)
// }

// function substract(num1,num2){

//     console.log(num1-num2)
// }

// function calculator(callback){

//     x = 80

//     y = 45

//     callback(x,y)
// }

// calculator(add)

// calculator(multiply)

// calculator(substract)

// if any callback function consuming data from higher order function then it is also called as closure function

// console.log("parthu")

// setTimeout( () =>console.log("ganesh"),2000)

// console.log("vignesh")

// function add(value1,value2){

//     console.log(value1)

//     console.log(value2)

//     console.log(value1+value2)

// }

// function substract(value1,value2){

//     console.log(value1)

//     console.log(value2)

//     console.log(value1-value2)
    
// }

// function calculator(num1,num2,callback){

//     x = num1

//     y = num2

//     callback(x,y)


// }

// calculator(45,12,add)

// calculator(45,12,substract)

// we can assynchronous a function as ananymous function with give direct function name  as parameter of setTimeout function

printMsg = () => console.log("devika")

setTimeout(printMsg,2000)

function1(function2(function3(function4(function5))))  // callback hell


