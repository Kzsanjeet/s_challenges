// class Kazi{ // this is a class
//     submit(){
//         alert(this.name + " the form is submitted.") // this is a method
//     }
//     cancel(){
//         alert("Form has been cancel.")
//     }
//     fill(givename){
//         this.name = givename
//     }
// }

// let sanjeet = new Kazi() // making object
// let balbir = new Kazi()
// let Thapa = new Kazi()

// Thapa.fill("Hi Sanjeet")
// Thapa.submit()
// //sanjeet.submit() //calling the method throuhg object
// balbir.cancel()

// constuctor

// class Animal {
//     constructor(name, species) {
//         this.name = name;
//         this.species = species;
//     }

//     describe() {
//         return `${this.name} is a ${this.species}.`;
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name, 'Dog'); // Call the parent constructor with name and fixed species 'Dog'
//         this.breed = breed; // Initialize the breed property
//     }

//     display() {
//         return `Its name is ${this.name}, breed is ${this.breed}, and species is ${this.species}.`;
//     }
// }

// let detail = new Dog("Charlie", "Cocker");

// console.log(detail.display()); // Output: Its name is Charlie, breed is Cocker, and species is Dog.


let map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map.get('name')); // John

let set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate values are ignored
console.log(set); // Set { 1, 2 }


function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable:', outerVariable);
        console.log('Inner Variable:', innerVariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');

SELECT * FROM emoloyees
ORDER BY salary DESC