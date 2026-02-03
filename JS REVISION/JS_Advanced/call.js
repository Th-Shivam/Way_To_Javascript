// call is used to invoke a function with a specific this value

// this is the traditional method 





// const user = {
//     name : "Shivam",
//     age : 21,
//     greet : function(){
//         console.log(`hi ${this.name}`)
//     }
// }

// user.greet()




// but lets say we have to use this function in multiple objects , then we'll need to write the function in every object
// which is not a good practice , so we can use call to invoke this function with a different this value
// using call also saves memory 



// so lets create a separate greet funx 

function greet(){
    console.log(`hi ${this.name}`)
}   

const user2 = {
    name : "Rudra",
    age : 22,
}

greet.call(user2)  