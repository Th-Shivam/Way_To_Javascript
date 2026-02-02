array = [1,2,3,4,5,] ;
console.log(array);

console.log(array.__proto__);

const user = {
name: "Shivam",
age: 20,
gethobby:function(){
    console.log("coding");
} ,
}

// i have not defined hasOwnProperty in user object but still i can access it because it is present in prototype of user object
console.log(user.hasOwnProperty("name"));

const shivamindetails = {
    achievement:"hackathon winner ",
    skills:["javascript","python","c++"],
}

//now set user as prototype of shivamindetails
shivamindetails.__proto__ = user;

//now the name property is accessible from shivamindetails object
console.log(shivamindetails.name);

// in bg array is also a type of object 