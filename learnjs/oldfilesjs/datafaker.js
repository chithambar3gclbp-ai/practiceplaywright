//import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker');
const { Z_PARTIAL_FLUSH } = require('zlib');

 const username = faker.internet.username()

const password = faker.internet.password()
 console.log(username)
console.log(password)
 console.log(faker.internet.email())


// console.log(faker.internet.password())
//console.log(faker.internet.password())


const personname = faker.person.lastName()

console.log(personname)

console.log(faker.person.jobTitle())

// parthu 
// p 

mname  = "parthu\np"

console.log(mname)

randomstr = "dguyfryubh\nfbvfghfyuisfgvjnlo\nioitdhgghdsaek\nmnbcxrtyvcznuoik" 

console.log(randomstr)

// Generate a random address
const address = faker.location.streetAddress();
console.log(address)
//           \" include doyuble quotes in string
//           \' include single quotes in string     
//           \\ include backslash in string
//           \n new line
//           \r carriage return
//           \v vertical tab
//           \t tab
//            \b backspace
//           \f form feed

