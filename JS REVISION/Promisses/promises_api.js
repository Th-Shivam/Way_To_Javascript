const url = "https://api.github.com/uers";

// const p1 = fetch(url) 

// const p2 = p1.then((response)=>{
//     return response.json() ;
// })

// const users = p2.then((response)=>{
//     return response ;
// })

// console.log(users)

// Promisse chaining 

fetch(url)
.then((response)=>{
    if(!response.ok){
        throw new Error("Failed to fetch user data")
    }
    return response.json() ;
})
.then((data)=>{
    console.log(data)
})
.catch((error) => {
    console.log(error.message)
})

