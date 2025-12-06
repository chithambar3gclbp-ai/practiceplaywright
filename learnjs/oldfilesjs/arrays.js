// //non primitive data type

// arrayname = [] //empty array - without elements

// arr1 = [3,4,5,9,7,6] //homogeniuos array---similar data type

// arr2 = ["parthu", 67, "vignesh", true, 82, { firstname : "pullagura", lastname : "p"}, undefined, null]  // heterogenious array--- different data types are there

// //index of an elelments always starts from 0

// console.log(arr2[0])

// // .length  its gives count of an elements in ana array

// console.log(arr1.length)

// console.log(arr2.length)

// //concat (joining of two arrays)

str = "playwright"
str2 = "javascript"

finalstr = str+str2

console.log(finalstr)


// finalarr = arr1.concat(arr2)
// console.log(finalarr)

// // //sort()

// arr3 = [9,7,8,3,1]
// arr4 = arr3.sort()
// console.log(arr4)

// arr5 = ["vignesh","Parthu","ganesh","princy",6, true, 82]

// arr6 = arr5.sort()

// console.log(arr6)

// //reverse()  it will revese the array elements   [ 'vignesh', true, 'princy', 'ganesh', 'Parthu', 82, 6 ]

// arr7 = arr6.reverse()

// console.log(arr7)      //[ 82, true, 6, 'princy', 'ganesh', 'Parthu', 'vignesh' ]

// // arr7 = arr5.reverse()

// // console.log(arr7)
// arr = [8,14,9,12,3,2].sort().reverse()

// console.log(arr)


// // //split()   it converts the string into array

// console.log("playwright".split(""))                               //[
// //                                                                   //    'p', 'l', 'a', 'y',
// //                                                                   //    'w', 'r', 'i', 'g',
// //                                                                   //    'h', 't'
// //                                                                   //   ]


// str = "playwright"

// arr8 = str.split("")

// console.log(arr8)



// str = "this is javascript class".split(" ")     // im used space to split the string  so it will split as word by word

// console.log(str)

// str = "this is javascript class".split("a")

// console.log(str)


// str = "this is javascript class".split("s")

// console.log(str)


str3 = "Playwright"

str4 ="Parthavi"

str5 =str3.concat(str4).split("").sort().reverse()     //.length                                //(str3.concat(str4))
console.log(str5.length)
console.log(str5)

//we can request the feature/rise the bug/ask some documentation issues with the help of playwright-- github.com 

// length,concat,sort,reverse,split,join,push,unshift,pop,shift,include,

//join  --- its help to convert array to string  

arr9 = ["parthu","vignesh","ganesh"].join("p")            // if we use , between the quotes it will add , between the elements

console.log(arr9)

arr10 = str4.concat(arr9)

console.log(arr10)

// //push --  it will add the elementsto array at the end

arr9= ["parthu","vignesh","ganesh"]

arr9.push("princy")

 console.log(arr9)

//unshift -- it will add the element at the beginning of thee array
arr9.unshift("princy","devika")

console.log(arr9)

// //pop()--- it will remove the last element

arr9.pop()
 
console.log(arr9)


// //shift() ---- it will remove the first element

arr9.shift()

console.log(arr9)

// //includes()----it will check the elements is present or not in an array and returns true or false


arr9.includes("chithu")

arr9.includes("parthu")

console.log(arr9.includes("chithu"))

console.log(arr9.includes("parthu"))
console.log(arr9)
arr9[2] = "radhika"  // it will replace the element at index 2 with radhika

console.log(arr9)

// // greenkart website is assignment todo automation test

//slice,splice,filter,map,reduce


//slice---- it should learn from  website playwright by own
//returns a copy of an array  does not modify the original array

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);                                                                                                                                              
console.log(citrus); // expected output: Array ["Orange", "Lemon"]

const nums = [1,2,3,4,5,6,7,8,9,10]
            //[0,1,2,3,4,5,6,7,8,9] this is the index positions
const result  = nums.slice(1,8);  // from index 1 to index 7 (8-1)


const lasttwo = nums.slice(-2);

console.log(result);
console.log(lasttwo);


// //splice---------it should learn from website playwright by own
// //its used to add,remove,replace elements in an array
 const months = ['Jan', 'March', 'April', 'June'];
 
 months.splice(1, 0, 'Feb'); // 1 = position for adding, 0 = number of elements to be removed
    
 console.log(months); // expected output: Array ["Jan", "Feb", "March", "April", "June"] //its adding feb at index 1

 const arr1 = ["red", "green", "blue", "yellow"];

    arr1.splice(2, 1, "purple", "orange");  // 2= position 1 = number of elements to be removed and replace with purple and orange

    console.log(arr1); // expected output: Array ["red", "green", "purple", "orange", "yellow"]
     arr2 = ["a", "b", "c", "d", "e"];

     removed = arr2.splice(1, 2);                                  

    console.log(arr2); // expected output: Array ["a", "d", "e"]

    console.log(removed); // expected output: Array ["b", "c"]

    
// //filter

arr = [5,8,12,15,20,25,30,35,40]

arr = arr.filter( n => n>20 )

console.log(arr)   //[25,30,35,40]  

arr = ["parthu","vignesh","radha","balu","linga","chithu","ganesh"] //ne[]     //here we have to filter names which has contains letters 'ne'

arr = arr.filter( n => n.includes("ne") )

console.log(arr)   //['vignesh','ganesh']

// //map

 arr = [2,6,3]  //multiply by 2  [4,12,6]

    arr = arr.map( n => n*2 )

    console.log(arr)
 arr = ["playwright","cypress","selenium"] // ["playwright Automation","cypress Automation","selenium Automation"]

    arr = arr.map( n => n + " Automation" )

    console.log(arr)    

// //reduce -----add all elements           ------these are all for assignment

 arr = [1,2,3,4,6,8] //results = 24

    results = arr.reduce( (accumulator, currentvalue) => accumulator + currentvalue )

//accumulator = previous value
//currentvalue = present value

    console.log(results) 
// //practice with free websites on chrome for practice





