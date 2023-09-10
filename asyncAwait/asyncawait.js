// function fileDown(){
//     let pokhara = new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("I am going to pokhara...")
//         },2000)
//     })

//     let mustang = new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("I am going to mustang...")
//         },4000)
//     })

//     pokhara.then((message)=>{
//         console.log(message)
//     })
//     mustang.then((result)=>{
//         console.log(result)
//     })
// }

// fileDown()


// async function fileDown(){
//     let pokhara = new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("I am going to pokhara...")
//         },2000)
//     })

//     let mustang = new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("I am going to mustang...")
//         },4000)
//     })

//     let pkr = await pokhara;
//     let mus = await mustang;
//     return [pkr,mus]
// }

// fileDown().then(result => console.log(result[0]))


async function fileup(){
    let sindhupalchok = new Promise((resolve,reject)=>{
        let condition = false;
        if(condition){
            setTimeout(()=>{
                resolve("I am going to sindhupalchok.")
            },2000)
        }else{
            setTimeout(()=>{
                reject("I am not going to sindhupalchok.")
            },2000)
        }
    })
    let barabise = new Promise((resolve,reject)=>{
        const checkk = false;
        if(checkk){
            setTimeout(()=>{
                resolve("I am going to barabise")
            },1000)
        }else{
            setTimeout(()=>{
                reject("I am not going to barabise")
            },1000)
        }
    })

    let sindhu = await sindhupalchok;
    let bara = await barabise;

    return [sindhu,bara]
}

// fileup().then(result => console.log(result))  
fileup()
.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})