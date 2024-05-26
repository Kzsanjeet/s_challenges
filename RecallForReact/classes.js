class Kazi{ // this is a class
    submit(){
        alert(this.name + " the form is submitted.") // this is a method
    }
    cancel(){
        alert("Form has been cancel.")
    }
    fill(givename){
        this.name = givename
    }
}

let sanjeet = new Kazi() // making object
let balbir = new Kazi()
let Thapa = new Kazi()

Thapa.fill("Hi Sanjeet")
Thapa.submit()
//sanjeet.submit() //calling the method throuhg object
balbir.cancel()