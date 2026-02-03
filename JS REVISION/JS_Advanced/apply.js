// same as call , but takes the input for the functions params in array form 


const user = {
    name:"Shivam",
    age:21   
}



function updateUsers(name , age){
    this.name = name
    this.age = age
    console.log(`user updated ${this.name} and ${this.age}`)
}

updateUsers.apply(user,["Rudra",22])  