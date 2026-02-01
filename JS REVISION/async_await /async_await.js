async function fetchData(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data ;
    }catch(error){
        console.log(error);
    }   
}

const url = "https://api.github.com/users";

console.log(fetchData(url));