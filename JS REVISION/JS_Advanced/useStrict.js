// js is a forgiving language , it dosent cares about small bugs , but after ES5 we can use "use strict" to make it strict 

//for eg

// var a = 10 
// b = 20
// console.log(a,b) 

// it is getting printed because there is not use strict enalbled 

// now let's enable use strict

// "use strict"
// var a = 10 
// b = 20
// console.log(a,b) 

// now it will not print b and will throw an error

// use strict can be used in global scope or in function scope 

// global scope
"use strict"
function fun(){
    console.log("hello")
}
fun()

// function scope
function fun(){
    "use strict"
    console.log("hello")
}
fun()