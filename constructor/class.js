class Attendence{
    present(){
        console.log("present")
    }
    absent(name,roll){
        console.log(`${this.name} of this ${this.roll} is absent`)
    }
    late(name){
        console.log(name+" "+"is late")
    }
    fill(name,roll){
        this.name = name
        this.roll = roll
    }
}   

let sanjeet = new Attendence()
let kazi = new Attendence()
let thapa = new Attendence()

sanjeet.present()
kazi.absent()
thapa.late("balbir")
kazi.fill("rahul",7)