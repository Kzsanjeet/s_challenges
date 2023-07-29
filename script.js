const display = document.querySelector(".display")
const btn = document.getElementById("btn")


let change = ()=>{
    const inputs = document.getElementById("input")
    let sum = 0
    inputs+= sum
    display.textContent = inputs.value
}

btn.addEventListener("click",()=>{
    change()
})



// const btn = document.getElementById('btn')
// const disp = document.querySelector(".result")

// const listy = []
// const store = () =>{
//     const vals = document.getElementById('inputv')
//     listy.push(vals.value)
//     let output = listy.join(", ")
//     disp.textContent = output
//     console.log(listy)
// }

// btn.addEventListener('click',()=>{
//     store()
//     inputV.value = ''



// const btn = document.getElementById('btn')
// const disp = document.querySelector(".result")

// const listy = []
// const store = () =>{
//     const vals = document.getElementById('inputv')
//     listy.push(vals.value)
//     // let output = listy.join(", ")

//     //creating unordred list
//     let ulEle = document.createElement("ol")
//     for(i=0;i<listy.length;i++){
//         let lstEle = document.createElement("li")
//         lstEle.textContent = listy[i]
//         ulEle.appendChild(lstEle)
//     }
//     disp.innerHTML=''
//     disp.appendChild(ulEle)
    
//     vals.value = ''
// }

// btn.addEventListener('click',()=>{
//     store()
// })