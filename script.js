// const Main=document.querySelector(".main")
// const display=document.getElementById("todisplay")
// const btn1=document.getElementById("convert")
// const C=document.getElementById("temperature")

// btn1.addEventListener("click",()=>{
//     let F= (C * 9/5) + 32
//     display.textContent=(`The temperature in farenheit is ${F}°F`);

//     C.value ="";
// })
// let p = new Promise((resolve,reject)=>{
//     let a =5;
//     let b = 6;
//     let c = a+b
//     if (c==12){
//         resolve("true,correct")
//     }else{
//         reject("false,incorrect")
//     }
// })

// p.then((message)=>{
//     console.log(message)
// }).catch((err)=>{
//     console.log(err)
// })
//suppose you have two choices left= "temple" right= "school"
//create a promise that give you location when you give the direction.

// let pro  = new Promise((resolve,reject)=>{
//     let left = true
//     let right = true
//     if(left === true){
//         resolve("Your destination is temple")
//     }
//     else if(right === true){
//         resolve ("Your destination is school")
//     }else if(right === left){
//         resolve("wrong destination")
//     }
//     else{
//         reject("Wrong destination")
//     }
// })
// pro.then ((msg)=>{
//     console.log(msg)
// }).catch((error)=>{
//     console.log(error)
// })         


let prom = new Promise((resolve,reject)=>{
    let light = true
    if (light){
        resolve("There is electricity.")
    }else{
        reject("There isnt elctricity.")
    }
})
prom.then ((message)=>{
    console.log(message)
}).catch((err)=>{
    console.log(err)
})
//qsc
const type1 = new Promise((resolve,reject) =>{
    resolve("Work one is done")
})
const type2 = new Promise((resolve,reject) =>{
    resolve("Work two is done")
})
const type3 = new Promise((resolve,reject) =>{
    resolve("Work three is done")
})

// it print out all the answers outputs serially .like if we set the settimeout than it prints all the data after time set passed 
Promise.all([
    type1,
    type2,
    type3
]).then((messages) =>{
    console.log(messages)
})

// it prints out only those who are selected to be executed
Promise.race([
    type1,
    type2,
    type3
]).then((messages) =>{
    console.log(messages)
})