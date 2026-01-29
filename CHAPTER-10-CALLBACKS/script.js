function loadscript(src , callback){
    var script = document.createElement("script");
    script.src=src ;
    document.body.appendChild(script);
    script.onload= function(){
        console.log("script loaded succesfully");
        callback() ;
        
    }
    script.onerror = function(){
        console.log("script has some error in loading");
        callback() ; 
    }    
    

}

loadscript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"  , function(){

    console.log("hello i am shivam ")
})

function hello(){
    console.log("hello i am shivam ")
} 
