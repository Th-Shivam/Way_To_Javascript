/* the main idea of a callback function is similar as recursion , i.e. function inside a function .
but still there is a difference that in recursion , the callback funx is hardcoded , but callback funx are not ,
they are flexible .
*/

function meet(callback){
    console.log("Hi , i will meet you very soon !") ;
    callback() ;
    console.log("Nice meeting u !") ;
}

function greet(){
    console.log("Hi there , good mrng y'all !!") ;
}

function dinner(){
    console.log("lets have a good dinner .")
}

meet(greet)
meet(dinner)