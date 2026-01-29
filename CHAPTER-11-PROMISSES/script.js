let p1 = new Promise((resolve,reject) =>{
    console.log("i am a promisse and i am penideng")
    setTimeout(()=>{
        console.log("i am a promisse and i am fulifilled ")
        resolve(true)

    },5000)

    
})

p1.then((value)=>{
    console.log("Thakur Shivam Singh" , value)
})


p1.then((error)=>{
    console.log("i am an error")
})