

// function add(num1,num2){

//     console.log(num1)
//     console.log(num2)
//     console.log(num1+num2)


// }

// add(5,9)


class calculator {
    x = 30
    
    y = 67

    z = "parthu"


    add(num1, num2) {                             // this is method

        console.log(num1)
        console.log(num2)
        console.log(num1 + num2)


    }

    substract(num1, num2) {                       // this is method

        console.log(num1)
        console.log(num2)
        console.log(num1 - num2)                   // this is method


    }
    multiply(num1, num2) {

        console.log(num1)
        console.log(num2)
        console.log(num1 * num2)                   // this is method


    }

    division(num1, num2) {                                // this is method

        console.log(num1)
        console.log(num2)
        console.log(num1 / num2)


    }

}

//create object of the class / instance of the class

const cal1 = new calculator()      //cal1 is memory occupied object

const cal2 = new calculator()      // cal2 is memory occupied object

cal1.add(2,8)

cal1.multiply(5,7)

cal1.division(6,2)

cal1.substract(3,5)

console.log(cal1.y)

console.log(cal1.z)


class classname{
    variables
    methods

}

const obj =new classname()

// obj.methods()
// console.log(obj.variables())

class student {

    constructor(name1,name2){
        //constructor is a method in class , it will automatically invoked/executed when we create object of the class
        console.log("name1:"+name1)
        console.log("name2:"+name2)
    }
    //constructor(x,y){
        //console.log("x,y are strings")
    //}
    //in a class its supports only single constructor

    studentname = "vignesh"

    print_student_name(){

        console.log("name of the student :" +this.studentname)
    }

    print_complete_details(){

        this.print_student_name()

        console.log("course name : playwright")

        console.log("place:bangalore")

    }


    method1(){


        this.method2()

        console.log("this is method 1")

        


    }

    method2(){


        console.log("this is method 2" )

       
    }


}

const stu1 = new student("ganesh","shiva")

//stu1.print_student_name()

stu1.print_complete_details()

stu1.method1()
