async function fetchData(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        for(let user of data){
             const div = document.createElement("div");
             div.className = "container";
             document.body.appendChild(div);
             const image = document.createElement("img") ;
             image.src=user.avatar_url;
             div.appendChild(image);
             const p = document.createElement("p") ;
             p.textContent=user.login;
             div.appendChild(p);    
            }
                        

         
    }catch(error){
        console.log(error);
    }   
}

const url = "https://api.github.com/users";
const data = fetchData(url);



 


