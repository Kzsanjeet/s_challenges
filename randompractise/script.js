//let array numbr = [1,2,3,4,5,6,7,8]
let array1 = [1,2,3,4,5,6,7,8]
let even = 0;//2,4,6,8
let odd = 0;//1,3,5

for(let i = 0; i < array1.length; i++){
    if(array1[i]%2 ===0){
        even += array1[i] 
    }
    else if(array1[i]%2 === 1){
        odd += array1[i]
    }
}

console.log(odd)
console.log(even)










// obj1 = {name:"John", type:"action"}  obj2 = {name:"Jawan",type:"comedy"}
//Make function and output should look like this
// The name of movie is Jawan and its type is action as John.

function result(){
    let obj1 = {name:"John", type:"action"} 
    let obj2 = {name:"Jawan",type:"comedy"}
    let a = `The name of movie is ${obj2.name} and its type is action as ${obj1.name}.`
    console.log(a)
    
}
result()







//create a function lessThen100(), which take an number as an argument and returns weather the given 
// value is greater or less then 100.

function lessThan100(num){
    if(num < 100){
        console.log("The value is less than 100")
    }
    else{
        console.log("It is greater.")
    }
}

lessThan100(223)

//suppose there are 8 students where each student have marks obtained 36,45,24,29,31,18,41,22 resp.
// let us consider all of them have got 20 mark as bonus
//now find out how many students have obtained mark over 50

let total = 0
let marks = [36,45,24,29,31,18,41,22]
for (let i = 0; i < marks.length; i++){
    let index = marks[i]+20
    if(index > 50){
        total+=1
    }
}
console.log(total)

//sauravs techniques
let newValue = marks.map((mark)=>
    mark + 20)
let result = newValue.filter((mark)=>{
    return mark > 50
})
console.log(result.length)

let newMarks = marks.map(newVal())
function newVal(mark){
    mark + 20
}


