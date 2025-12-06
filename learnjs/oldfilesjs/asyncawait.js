
function myFunction() {
    return Promise.resolve("hello");
}

async function main(){
    const x = await myFunction()
    console.log(x)
}

main()

function step1(value){
    return new Promise((resolve,reject) =>{

        resolve(value +10);
    })
}

async function execute(){
    let result1 = await step1(10)
    console.log(result1)
}

execute()

function add(num1,num2){
    return new Promise((resolve,reject) => {
        resolve(num1 + num2);
    })
}

function substract(num1,num2){
    return new Promise((resolve,reject) => {
        resolve(num1 - num2);
    })
}
console.log(add(6,9))

p = add(6,9)

p.then(value => console.log(value))

async function result(){
    value1 = await add(8,5)

    console.log(value1)

    value2 = await substract(9,3)

    console.log(value2)


}

result()

//set -- unique value

arr = [2,3,8,6,4,7,9,7,5,8,8,6,4]

unique = [...new Set(arr)]

console.log(unique)


//map



//regular expressions

x = "hyutyr765790-pioiw43tytyr43#46DFHJ98n,hfdghjfbukyk"

numbers = x.replace(/\D/g,"") //only numbers

char1 = x.replace("7","")
char2 = x.replaceAll("7","")
console.log(char1)
console.log(char2)
char3 = x.replace(/[^a-z/A-Z]/g,"")
console.log(char3)
console.log(numbers)

//   /d = substring matches
//   /g = global match
//   /i = case sensitive match
//   /m = multiline matching
//   /s = .(dot) to match line terminators
//   /u = unicode supports
//   /v = better unicode supports
//   /y = "stcky" search




//
// [a]   = characters between brackets
// [^a]  = except characters

price = "$16,785".replace(/[^0-9]/g,"")

console.log(price)
