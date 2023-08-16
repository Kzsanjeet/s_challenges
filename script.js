const input = document.getElementById("inputs")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const result = document. getElementById("output")

let celcius = () =>{
    let c =  (input.value- 32) * 5/9;
    result.textContent = c
    Math.floor(c)
}
let farenheit = () =>{
    let f= (input.value * 9/5) + 32
    result.textContent = f
    Math.floor(f)
}

btn1.addEventListener("click",()=>{
    celcius()
})
btn2.addEventListener("click",()=>{
    farenheit()
})
