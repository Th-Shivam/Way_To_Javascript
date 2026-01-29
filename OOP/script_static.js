class Animal{

    constructor(name){
        this.name = Animal.capitalize(name) 
    };

    run(){
        alert("Animal " + this.name + " is running")
    }

   static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)

    }

}

let monkey  = new Animal("jack")

monkey.run()