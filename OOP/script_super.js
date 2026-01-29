class Employee{



    login(){
        alert(`Employee logged in !`)
    }
    
    logout(){
        alert(`Employee logged out !`)
    }

    requestLeave(x){
        alert(`Employee requested ${x} leave !`)
    }

}

class Engineer extends Employee {
    requestCofee(){
        alert("Engineer requested  cofee !")
    }

    requestLeave(){
        super.requestLeave(4)
    }
}

let shivam = new Engineer  
shivam.requestCofee()
shivam.requestLeave()