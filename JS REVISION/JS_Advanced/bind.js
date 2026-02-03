// this is also same as call and apply , but it returns a function which can be invoked later 
// it does not updates or invokes the function immediately 
//bind returns a function with the specified params which can be invoked later on in the program 


const user = {
    name:"Shivam",
    age:21   
}


function updateUsers(name , age){
    this.name = name
    this.age = age
    console.log(`user updated ${this.name} and ${this.age}`)
}

const updatedUser = updateUsers.bind(user , "Rudra" , 22)  
updatedUser()  
