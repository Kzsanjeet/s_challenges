let saveBtn = document.getElementById("save")
let deleteBtn = document.getElementById("delete")
let savePara = document.querySelector(".savePara")
let content = document.getElementById("content")
let deleteNumber = document.getElementById("blogDel")
let blogNumber = document.getElementById("blogNumber")
let delPara = document.querySelector(".delPara")
let showBtn = document.getElementById("show")
let showParag = document.getElementById("showPara")

function saveData(){
        localStorage.setItem(blogNumber.value,content.value)
        savePara.innerHTML=`<h2>Data Saved</h2>`
}
function deleteData(){
    // alert("Are you sure you want to delete it?")
    // localStorage.removeItem(deleteNumber.value)
    // delPara.innerHTML=`<h2>Blog deleted<h2>`
    if(deleteNumber.value != blogNumber.value){
        alert("The blog number does not exist")
        delPara.innerHTML = `<h2> Blog in not available</h2>`   
    }else{
        alert("Are you sure you want to delete it?")
        localStorage.removeItem(deleteNumber.value)
        delPara.innerHTML=`<h2>Blog deleted<h2>`
    }
}
function showData(){
    showParag.innerHTML = JSON.stringify(localStorage)
}

deleteBtn.addEventListener("click",()=>{
    deleteData()   
    deleteNumber.value = "" 
    
})
saveBtn.addEventListener("click",()=>{
    saveData()
    blogNumber.value = ""
    content.value = ""
})
showBtn.addEventListener("click",()=>{
    showData()
})