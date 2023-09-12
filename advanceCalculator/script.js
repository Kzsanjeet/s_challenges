let plus = document.getElementById("plus")
let sub = document.getElementById("minus")
let mul = document.getElementById("multiply")
let div = document.getElementById("divide")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let output = document.querySelector(".result")
let resetBtn = document.getElementById("btnReset")
let totalOpt = document.getElementById("total")
let show = document.getElementById("show")
let count = 0
show.textContent = "+"

totalOpt.innerHTML =`<h1>Total Operation:</h1>`     


function add(){
    let join = Number(input1.value) + Number(input2.value)
    show.innerHTML="+"
    output.textContent = join
    totalOpt.innerHTML =`<h1>Total Operation: ${count+=1}</h1>`
    console.log(join)
}

function minus(){
    let subtract = Number(input1.value)- Number(input2.value)
    show.textContent = "-"
    output.textContent = subtract
    totalOpt.innerHTML =`<h1>Total Operation: ${count+=1}</h1>`
    console.log(subtract)
}
function mult(){
    let mul = Number(input1.value)* Number(input2.value)
    show.innerHTML="*"
    output.textContent = mul
    totalOpt.innerHTML =`<h1>Total Operation: ${count+=1}</h1>`
    console.log(mul)
}
function divide(){
    let div = Number(input1.value)/ Number(input2.value)
    show.innerHTML="/"
    output.textContent = div
    totalOpt.innerHTML =`<h1>Total Operation: ${count+=1}</h1>`
    console.log(div)
}

resetBtn.addEventListener("click", ()=>{
    output.textContent = " "
    input1.value=""
    input2.value=""
})
div.addEventListener("click",()=>{
    divide()
})
mul.addEventListener("click",()=>{
    mult()
})
sub.addEventListener("click",()=>{
    minus()
})
plus.addEventListener("click",()=>{
    add()
})