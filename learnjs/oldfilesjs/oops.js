// //oops object oriented programming

// // encapsulation 

// class student {
//     studentdetails(value1, value2, value3) {
//         this.studentname = value1
//         this.student_place = value2
//         this.student_course = value3

//     }

//     print_student_details() {

//         console.log(this.studentname, this.student_place, this.student_course)
//     }


// }
// const stu1 = new student()

// stu1.studentdetails("chethana", "banglore", "playwright")

// stu1.print_student_details()
// // it is useful at the time of automation
// //encapsulation --binding the data between the methods in a class
// //setter -- assign the values to variables
// //getter -- get the assigned values of the variables

// class students {

//     studentname = "chethana"
//     student_place = "banglore"
//     student_course = "playwright"


//     print_student_details() {

//         console.log(this.studentname, this.student_place, this.student_course)
//     }

// }

// const stu2 = new students()

// stu2.print_student_details()
// // this is normal oops concept/class

// //2.inheritance
// //we need more classes to demo
// //single inheritance(here only 2 classes are there,i.e., parent class/base class,child class/derived class)
// //multi level inheritance(here morethasn two classes are there)
// //geeksforgeeks.org for inheritance of java
// //hierarchical inheritance here there are one parent/base class,two child/derived classes, 
// //multiple inheritance has two parents and one child, this is not supported in javascripted.




// //single inheritance

// // multi level inheritance

// class A  {

//     m1() {

//         console.log("this is m1 method")
//     }
//     m2() {

//         console.log("this is m2 method")
//     }
//     m3() {

//         console.log("this is m3 method")
//     }
//     m4() {

//         console.log("this is m4 method")
//     }

// }

// class B extends A  {

//     m5() {

//         console.log("this is m5 method")
//     }
//     m6() {

//         console.log("this is m6 method")
//     }
//     m7() {

//         console.log("this is m7 method")
//     }
//     m8() {

//         console.log("this is m8 method")
//     }

// }


// class C extends B {

//     m9() {

//         console.log("this is m9 method")
//     }
//     m10() {

//         console.log("this is m10 method")
//     }
//     m11() {

//         console.log("this is m11 method")
//     }
//     m12() {

//         console.log("this is m12 method")
//     }

// }

// const obj = new C

// obj.m5()  // from child(parent)

// obj.m1()  // from parent

// obj.m12() // from child

// // hierarchical inheritance
// //class B extends A
// //class C extends A
// //3.polymorphism
// //method overriding
// //method overloading

// class D {
//     add(num1,num2){
//         console.log(num1)
//         console.log(num2)
//         console.log(num1+num2)

//     }
//     printMessage(){
//         console.log("this method is from parent")
//     }
// }
// class E extends D {
//     add(num1,num2,num3){
//         console.log(num1)
//         console.log(num2)
//         console.log(num3)
//         console.log(num1+num2+num3)

//     }
//     printMessage(){
//         console.log("this method is from child")
//     }
// }

// // const obj2 = new D()

// // obj2.printMessage()  // method is overriding   this method is from child

// // obj2.add(7,8)  //NaN  method overriding //7
//                                         //8
//                                         //undefined
//                                         //NaN  when we create object of E

//  const parentobj = new D()         
 
 
//  parentobj.printMessage()  //this method is from parent

//  parentobj.add(7,8,4)       //7    //here 3rd number 4 is ignored simply
//                           //8
//                           //15     // method overloading

//prototyping


 
class A  {

    stuname = "chithu"

    trainer = "parthu"


    m1() {

        console.log("this is m1 method")
    }
    m2() {

        console.log("this is m2 method")
    }
    m3() {

        console.log("this is m3 method")
    }
    m4() {

        console.log("this is m4 method")
    }

}

A.prototype.institutename = "dbsqa"

A.prototype.m5=function (){             // here function keyword compulsary

    console.log("this is m5 method")
}
const objA = new A()

console.log(objA.stuname)

objA.m3()

console.log(objA.institutename) 

objA.m5()