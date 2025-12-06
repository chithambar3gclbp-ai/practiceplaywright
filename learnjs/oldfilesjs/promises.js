
// p = new Promise((resolve,reject)=>{

//     let x=2

//     if(x==2){
//         resolve(
//             {
//               firstname : "Parthavi",
//               lastname : "pullagura"
            
//             }

//         )

//     }
//     else{
//         reject("abc")
//     }
// })

// console.log(p)
// //pending state

// p.then(stname => { 
//     console.log(stname.firstname,stname.lastname)
// })  //resolved/fullfilled

// .catch(message => console.log(message))
// //rejected state

// .finally(() => console.log("pqr"))

// p2=Promise.resolve({
    
//               firstname : "Parthavi",
//               lastname : "pullagura"
            
// });
// p2.then((message) => console.log(message))


// p3=Promise.reject("prabhas");

// p3.catch((word) => console.log(word));


// //callback
// function step1(value,callback){
//     callback(value + 10,false);
// }
// step1(5,function(result,error){

//     if(error){
//         console.log("An error occured");
    
//     }else{
//         console.log("Result :"+result);
//     }
// });

//promise

function step1(value){
    return new Promise((resolve,reject) => {
        resolve(value + 10);
    });
}

step1(5)
  .then(result => {
    console.log("Result:" + result);
  })
