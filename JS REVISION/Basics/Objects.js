// const shivam = {
//     name : "shivam" ,
//     age : 20 ,
//     developer : true 
// }


// create 

// shivam.love = "Cyber Security" 
// console.log(shivam) 

// update 

// shivam.age = 21 ;
// console.log(shivam) 

// delete 

// delete shivam.love ;

// console.log(shivam)

// console.log(Object.keys(shivam)) 
// console.log(Object.values(shivam))
// const entries = Object.entries(shivam)
// for(const [keys , values] of entries){
//     console.log(keys , values)
// }

// object destructuring 

// const {name , age} = shivam ;
// console.log(name , age )


// function inside obj => 

//     const shivam = {
//     name : "shivam" ,
//     age : 20 ,
//     developer : true ,
//      greet: function () {
//     console.log("Hello, my name is " + this.name);
//   }
// }

// nested objects => 

// shivam.greet() ;

//     const shivam = {
//     name : "shivam" ,
//     age : 20 ,
//     developer : true ,
//     Address : {
//         city:"GKP" ,
//         state:"Uttar Pradesh"
//     }
    
// }

// console.log(shivam.Address)

// object copies =>

//     const shivam = {
//     name : "shivam" ,
//     age : 20 ,
//     developer : true ,    
// }

// const aryan = shivam ; // only reference , change in aryan will also affect shivam .

// now for shallow copy use spread operator {...} 

// const golu = {...shivam} 

// console.log(golu)
// golu.name = "Golu"
// console.log(golu) 
// console.log(shivam)

// for deep copy use , StructuredClone 

// const pawan = structuredClone(shivam)

