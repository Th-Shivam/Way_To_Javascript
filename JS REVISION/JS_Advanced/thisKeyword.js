// this keyword in global scope in nodejs env points to empty object {}
// this keyword in global scope in browser env points to window object

// console.log(this)

//now in function scope the this keyword points to the object which invoked this

const user = {
    name : "Shivam",
    age : 21,
    greet : function(){
        console.log(`hi ${this.name}`)
    }
    
}

user.greet()

// normal funx without strict mode , which are invoked in global scope points to window/global object
// in strict mode it points to undefined

"use strict"
function greet(){
    console.log(`hi ${this.name}`)
}

greet() 