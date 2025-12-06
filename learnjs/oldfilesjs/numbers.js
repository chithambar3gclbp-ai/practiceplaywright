
//Number


//Coersion 


//console.log(5+"7")


//(BigInt)anynumber > 2^53

// console.log(2 ** 53)

// num1 = 90071992547409981n    // for big numbers we sholud place n at the end

// num2 = 9n

// console.log(num1 + num2)

// num3 = 56

// str1 = String(num3)

// console.log(typeof (str1))

// n1 = Math.round(5.5)   //6

// console.log(n1)


// n2 = Math.ceil(7.1)

// console.log(n2)

// n3 = Math.floor(9.99)

// console.log(n3)

// n4 = Math.trunc(7.83)
// //it will give integer part only and it is likely as floor
// console.log(n4)    

// n5 = 2**10

// n6 = Math.pow(2,10)

// console.log(n5)

// console.log(n6)

// n7 = Math.sqrt(81)

// console.log(n7)

// n8 = Math.min(3,4,5,6,8,9,87,)

// console.log(n8)

// n9 = Math.max(3,4,5,6,8,9,87,)

// console.log(n9)


// chithu = Math.random()

// console.log(chithu)

//today Date

//await page.locator("locator").fill("26/11/2025")

//movement js

//import moment from 'moment';

const moment = require('moment');
//const date = moment().format("YYYY/MM/DD");

//const date = moment().format("LL");   //November 26, 2025

//const date = moment().format("L");   // date in local format
//const date = moment().format("LLL")    //November 26, 2025 7:26 PM

//const date = moment().format("LLLL")   //Wednesday, November 26, 2025 7:27 PM

//const date = moment().format("LTS")     //7:28:56 PM   time with seconds
  // ("LT")        // time without seconds

//const date = moment().format("DDD-MM-YYYY")    //it shows the no of the day in year
//console.log(date)
const tomorrowStr = moment().add(1, 'day').format('DD-MM-YYYY');

console.log(tomorrowStr)

// date format learnt from movementjs.com documentation




//math
// from //mathw3schools 
// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E


var price1 = "$ 8,999".replace("$","").replace(",","").trim()

var price2 = "$ 8,999".replace("$","").replace(",","").trim()

var price1 = Number("$ 8,999".replace("$","").replace(",","").trim())

var price2 = Number("$ 8,999".replace("$","").replace(",","").trim())





console.log(price1)

console.log(price2)



console.log(Number(price1)+Number(price2))

console.log(price1+price2)