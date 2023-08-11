const addBtn = document.getElementById("addBtn")
const removeBtn = document.getElementById("remove")
const clear = document.getElementById("clear")
const para = document.getElementById("para")

para.textContent= JSON.stringify(localStorage)
addBtn.addEventListener("click",()=>{
    const keyy = document.getElementById("keyy")
    const valuee = document.getElementById("valuee")
    let data = localStorage.setItem(keyy.value,valuee.value);
    para.textContent= JSON.stringify(localStorage)
})

removeBtn.addEventListener("click",()=>{
    console.log("button clikc")
    const rem = document.getElementById("rem").value 
    localStorage.removeItem(rem)
}
)

clear.addEventListener('click',()=>{
    alert("do you rally wanna clear all ?")
    para.textContent=""
    localStorage.clear()
})



