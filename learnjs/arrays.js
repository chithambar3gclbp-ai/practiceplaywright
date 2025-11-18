//non primitive data type

arrayname = [] //empty array - without elements

arr = [3,4,5,9,7,6] //homogeniuos array

arr2 = ["parthu", 67, "vignesh", true, 82, { firstname : "pullagura", lastname : "p"}, undefined, null]  // heterogenious array

//index of an elelments always starts from 0

console.log(arr2[0])

// .length  its gives count of an elements in ana array

console.log(arr.length)

console.log(arr2.length)

// concat (joining of two arrays)

// str = "playwright"
// str2 = "javascript"

// finalstr = str+str2

// console.log(finalstr)


finalarr = arr.concat(arr2)
console.log(finalarr)

//sort()

arr3 = [9,7,8,3,1]
arr4 = arr3.sort()
console.log(arr4)

arr5 = ["vignesh","Parthu","ganesh","princy",6, true, 82]

//arr6 = arr5.sort()

//console.log(arr6)

//reverse()  it will revese the arrayu elements   [ 'vignesh', true, 'princy', 'ganesh', 'Parthu', 82, 6 ]

arr7 = arr5.reverse()

console.log(arr7)      //[ 82, true, 6, 'princy', 'ganesh', 'Parthu', 'vignesh' ]


arr = [8,14,9,12,3,2].sort()//.reverse()

console.log(arr)


//split()   it converts the string into array

//console.log("playwright".split(""))                               //[
                                                                  //    'p', 'l', 'a', 'y',
                                                                  //    'w', 'r', 'i', 'g',
                                                                  //    'h', 't'
                                                                  //   ]


str = "playwright"

arr8 = str.split("")

console.log(arr8)



str = "this is javascript class".split(" ")

console.log(str)

str = "this is javascript class".split("a")

console.log(str)


str = "this is javascript class".split("s")

console.log(str)


str3 = "Playwright"

str4 ="Parthavi"

str5 =str3.concat(str4).split("").sort().reverse().length                                //(str3.concat(str4))

console.log(str5)

//we can request the feature/rise the bug/ask some documentation issues with the help of github.com 

// length,concat,sort,reverse,split,join,push,unshift,pop,shift,include,

//join  --- its help to convert array to string  

arr9 = ["parthu","vignesh","ganesh"].join(",")

console.log(arr9)

arr10 = str4.concat(arr9)

console.log(arr10)

//push --  it will add the elementsto arrayat the end

arr9= ["parthu","vignesh","ganesh"]

arr9.push("princy")

console.log(arr9)

//unshift -- it will add the element at the beginning of thee array
arr9.unshift("princy","devika")

console.log(arr9)

//pop()--- it will remove the last element

arr9.pop()
 
console.log(arr9)


//shift() ---- it will remove the first element

arr9.shift()

console.log(arr9)

//includes()----it will check the elements is present or not in an array and returns true or false


arr9.includes("chithu")

arr9.includes("parthu")

console.log(arr9.includes("chithu"))

console.log(arr9.includes("parthu"))

arr9[2] = "radhika"

console.log(arr9)

// greenkart website is assignment todo automation test

//slice
//splice
//filter

arr = [5,8,12,15,20,25,30,35,40]

arr = ["parthu","vignesh","radha","balu","linga","chithu","ganesh"] //ne[]

//map

arr = [2,6,3]  //multiply by 2  [4,12,6]

arr = ["playwright","cypress","selenium"] // ["playwright Automation","cypress Automation","selenium Automation"]


//reduce -----add all elements           ------these are all for assignment

arr = [1,2,3,4,6,8] //results = 24

//practice with free websites on chrome for practice





