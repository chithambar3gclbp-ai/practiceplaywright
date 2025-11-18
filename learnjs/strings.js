

str1 = "hello world"

str2 = ' javascript'

str3 = ` welcome to learnjs`


//literals

str4 = `${str1} and ${str2} and  ${str3} all are strings`

console.log(str4)

//coercion
//concatination

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
