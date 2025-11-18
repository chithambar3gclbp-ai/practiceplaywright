// arrow functions ftrom es6 version of javascript






// function add() {
//   console.log(10) 
//   console.log(20)
//   console.log(10+20)
// }

// console.log(add())

function add(num1,num2){
    console.log(num1)
    console.log(num2)
    console.log(num1+num2)
}

add(5,7)
add(23,89)



add = (num1,num2) => {
    console.log(num1)
    console.log(num2)
    console.log(num1+num2)
}

add(23,45)
add(100,200)


function substract(){
    return (20-10)

}

console.log(substract())    

substract = () => {
    return (50-30)
}
console.log(substract())

substract = () => (90-40)

console.log(substract())    

function squareofN(num2){
    console.log(num2*num2)
}
squareofN(5)


//console.log(squareofN(5))

squareofN = num2 => console.log(num2*num2)

squareofN(7)    

//=================================================================================
//callback function     //function passed as an argument to another function is called callback function 

// function parthu(){

// }

// function vignesh(param1){

// }

//higher order function
//closure function
//ananymous function      a function without functionname 

// function (){
//     console.log("hey hi")

// }

//() => console.log("hey hi")

   
