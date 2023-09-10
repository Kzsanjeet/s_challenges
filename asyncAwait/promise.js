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


// let prom = new Promise((resolve,reject)=>{
//     let light = true
//     if (light){
//         resolve("There is electricity.")
//     }else{
//         reject("There isnt elctricity.")
//     }
// })
// prom.then ((message)=>{
//     console.log(message)
// }).catch((err)=>{
//     console.log(err)
// })
// //qsc
// const type1 = new Promise((resolve,reject) =>{
//     resolve("Work one is done")
// })
// const type2 = new Promise((resolve,reject) =>{
//     resolve("Work two is done")
// })
// const type3 = new Promise((resolve,reject) =>{
//     resolve("Work three is done")
// })

// // it print out all the answers outputs serially .like if we set the settimeout than it prints all the data after time set passed 
// Promise.all([
//     type1,
//     type2,
//     type3
// ]).then((messages) =>{
//     console.log(messages)
// })

// // it prints out only those who are selected to be executed
// Promise.race([
//     type1,
//     type2,
//     type3
// ]).then((messages) =>{
//     console.log(messages)
// })

// let p = new Promise((resolve,reject)=>{
//     if (2+3==5){
//         setTimeout(()=>{
//         resolve({
//             message1:"yeh true",
//             message2:"ok fine"
//         })
//     },2000)
//     }
//     else{
//         reject("cannot happens that")
//     }
// })

// p.then((msg)=>{
//     console.log(msg)
// }).catch((er)=>{
//     console.log(er)
// })



let prom = new Promise((resolve,reject)=>{
    let light = true;
    if(light){
        setTimeout(()=>{
            resolve({
                msg1:"Light is on.",
                msg2:"There is electricity."
            },3000)
        })
    }else{
        reject("There is no light in the city.")
        
    }
})
prom.then((message)=>{
    console.log(message.msg1)
}).catch((err)=>{
    console.log(err)
})


let file1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("file one of 4gb downloading...")
    },2000)
})
let file2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("file two of 6gb downloading...")
    },3000)
})
let file3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("file three of 2gb downloading...")
    },1000)
})

Promise.all([
    file1,file2,file3
]).then((message)=>{
    console.log(message)
})

Promise.race([
    file1,file2,file3
]).then((message)=>{
    console.log(message)
})
//show result when all the files are downloaded

//show result of that file which download first 

// show result after they download
// file1.then(msg => console.log(msg))
// file2.then(msg => console.log(msg))
// file3.then(msg => console.log(msg))
