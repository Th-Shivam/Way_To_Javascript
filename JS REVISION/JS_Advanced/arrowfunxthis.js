// arrow functions do not have their own this keyword , they inherit this from the parent/lexical scope 
// here in the node js env the parent scope is global scope and this points to empty object {}
// and in the browser env the parent scope is global scope and this points to window object

const greet = () => {
    console.log(this)
}

greet()