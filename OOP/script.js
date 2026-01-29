class RailwayForm{

    constructor(names , trainno){
        this.name = names
        this.trainnu = trainno
        

    }

    
    submit(){
        alert("This form is submitted " + this.name +" " + this.trainnu)
    }

    cancel(){
        alert("this form is canceled " + this.name +" " + this.trainnu)
    }
    
    preview(){
        confirm(this.name + " your train no. is " + this.trainnu )
    }
    
}

shivam = new RailwayForm("shivam" , 384776)
shivam.preview()
shivam.submit()
shivam.cancel()

