

str1 = "hello world"

str2 = ' javascript'

str3 = ` welcome to learnjs`


//literals

str4 = `${str1} and ${str2} and  ${str3} all are strings`

console.log(str4)

//coercion
//concatination  +

console.log(4+"4") //"44"
num1 = 4+"4"
num2 = 7
console.log(num1+num2)//"447"
console.log(num2+num1)//"744"
console.log(typeof(num1))//string  only when + symble is present with string it will convert number to string


console.log(4-8) //-4
console.log(4-"8") //-4
console.log(typeof(4-"8")) //number  when - , / , * symble is present with string it will convert string to number

console.log("5"*2) //10
console.log(typeof("5"*2)) //number
console.log("10"/2) //5
console.log(typeof("10"/2)) //number
console.log("10"%3) //1
console.log(typeof("10"%3)) //number
console.log("10"-"3") //7
console.log(typeof("10"-"3")) //number
console.log("hello"*3) //NaN
console.log(typeof("hello"*3)) //number

st1 = "hello world"
console.log(st1.length) //11
console.log(st1[0]) //h

console.log(st1.charAt(1)) //e

console.log(st1[4]) //o
console.log(st1[10]) //d
console.log(st1[11]) //undefined
console.log(st1[st1.length-1]) //d
console.log(st1[5]) //space
console.log(st1[6]) //w 
console.log(st1.indexOf("o")) //4
console.log(st1.indexOf("world")) //6

console.log(st1.indexOf("z")) //-1


str1 = "This is jAvascript Class javascript".toUpperCase()

// str2 = str1.toUpperCase()

 console.log(str1) //THIS IS JAVASCRIPT CLASS JAVASCRIPT

str2 = str1.toLowerCase().toUpperCase().toLowerCase()

console.log(str2) //this is javascript class javascript

str3 = "           parthu          ".trimEnd()

console.log(str3)
console.log(str3.length)
//console.log(str3.length)

//console.log(str3) //"parthu"
//includes()

str4 = "parthavi and vignesh are good friends"

str4.includes("ganesh")
 console.log(str4.includes("ganesh")) //false

console.log(str4.includes("vignesh")) //true

let r =(Math.random() +   1).toString(36).substring(7);
//jobtitle = r
//console.log(jobtitle)

//npm package to generate random string thst is faker.js
str5 = "playwright automation tool is number one trending course"

str6 = str5.substring(0,15)

console.log(str6)

str7 = Number("parthu")

console.log(str7)

console.log(typeof(str7))

str8 = parseInt("89.4")    // it will give only integer value

str9 = parseFloat("77.43") // it will give total number


console.log(str8)

console.log(str9)

console.log(typeof(str9))

