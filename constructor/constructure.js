class Forcard{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    varify(){
        console.log(`Hi, ${this.name} your age is ${this.age}.`)
    }
    unvarify(){
        console.log(`Hi, ${this.name} your age is not ${this.age}.`)
    }
}
 person1 = new Forcard("Sanjeet", 20)
 person2 = new Forcard("Sanjeet", 7)

 person1.varify()
 person2.varify()