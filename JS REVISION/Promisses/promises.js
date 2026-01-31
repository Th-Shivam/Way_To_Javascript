const p1 = new Promise((resolve,reject)=>{
    console.log("Hi , im a prommise and i am pending now .") ;
    setTimeout(()=>{
        resolve("Promise has been resolved now .")
    },2000)
})

p1.then((value)=>{
    console.log(value) ;
})

p1.catch((error)=>{
    console.log(error) ;
})

p1.finally(()=>{
    console.log("Promise has been settled now .") ;
})