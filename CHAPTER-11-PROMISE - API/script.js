let p1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        console.log("i am a promisse 1 and i am fulifilled ")
        resolve("VALUE 1 ")

    },1000)

    
})

let p2 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        console.log("i am a promisse 2 and i am fulifilled ")
        resolve("VALUE 2 ")

    },2000)

    
})

let p3 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        console.log("i am a promisse 3 and i am fulifilled ")
        reject(new Error("error"))

    },3000)

    
})

p3.catch((Error)=>{
    console.log("this is an error ")
})

// let promisse_all = Promise.all(([p1,p2,p3]))

// promisse_all.then((value)=>{
//     console.log("i am done")
// })

let promisse_all = Promise.allSettled(([p1,p2,p3]))

promisse_all.then((value)=>{
    console.log("i am done")
})
