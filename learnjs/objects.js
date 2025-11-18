

//object is non premetive datatype




// premitive datatypes

// var x=8
 
// var y= "parthu"

// var z=true/false

// var a=undefined

// var b=null

//particulars = {
  //  x : 8,
    //y : "parthu",
    //z : true
//}

// console.log(particulars.x)
// console.log(particulars.y)

// console.log(Particulars['y'])

// console.log(particulars.a)

// key : value       ( pairs )
// object = {
//     propertyname=propertyvalue
// }



// const student ={

//     firstname : "vignesh",
//     lastname : "kumar",
//     place : "mallenipalli",
//     courses : {
//         course1 :{
//             key1 : "API testing",
//         }, 
//         course2 : "playwright",
//         course3 : "java script"

//     }

// }

// console.log(student.firstname)      //vignesh
// console.log(student['firstname'])   //vignesh
// console.log(student.courses.course1)
// console.log(student.courses)
// console.log(student.courses.course1.key1)
// console.log(student.fathername)    //undefined

// student["place"]="peddavaduguru"   //edit the value

// console.log(student.place)

// student['gender']="male"

// console.log(student.gender)
// console.log(student)

// delete student.courses.course3    //deleting the property
// console.log(student.courses.course3)
//console.log(student)



const menuItems={
    menu1:"Admin",
    menu2:"Pim",
    menu3:"Leave",
    menu4:"Time",
    menu5:"Recruitment",
    menu6:"Myinfo",
    menu7:"Performance"


}

for(let item in menuItems){

    console.log("loop starts")

    console.log(menuItems[item])

    console.log("loop ends")

}
