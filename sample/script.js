let infor = document.getElementById("info")
let btn1 = document.getElementById("btn1")
let list1 = []
function addHere(){
    let inputValue = document.getElementById("inputs")
    list1.push(inputValue.value)
    infor.textContent = list1 
}
btn1.addEventListener("click",()=>{
    addHere()
})
