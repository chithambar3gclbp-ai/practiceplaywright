const { getRandomValues } = require("crypto")

class employee{

    static x =45  //static variable

    y =78         //non static variable

    method(){
        //non static method
        console.log("this is a simple method")

    }
    static method1(){
        //static method
        console.log(this.x)
        console.log("this is a simple method name 1")
        
    }
    method2(){

        console.log("this is a simple method name 2")
        
    }
    method3(){

        this.method2()

        console.log("this is a simple method name 3")
        
    }
    method4(){

        console.log("this is a simple method name 4")
        
    }
}


console.log(employee.x)

employee.method1()

const emp1 = new employee()

console.log(emp1.y)

emp1.method()

emp1.method3() //its not work because of its static

//static variables/methods are call only in static methods/variables 
//non static variables/methods are call only in non static methods/variables


//class
//constructor
//this.
//static
//these are all useful too oops concepts
//oops--object oriented program
//encapsulation
//inheritance
//polymarphism
//prototyping


//turnory operators
//2 values   1st value , 2nd values

//1 variable 

//Condition 

//z = 7===7? "parthu" : "bhavani"

//console.log(z)

//z = 7==="7"? "parthu" : "bhavani"

//console.log(z)