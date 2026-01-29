class Animal{
    constructor(name , color){
        this.name = name;
        this.color = color ;
    
    };
    
    run(){
        alert( this.name + " is running !")
    }
    shour(){
        alert( this.name + " is shouting !")
    }

}


class eat extends Animal {
   
    eat(){
        alert(this.name + " is eating ")
    }
}

let monkey  = new eat("monkey" , "brown") 

monkey.eat()
monkey.run()