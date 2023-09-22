let writeBtn = document.querySelector("#writeDown")
let showBtn = document.getElementById("show")
let saveBtn = document.getElementById("save")
let deleteBtn = document.getElementById("delete")
let savePara = document.querySelector(".savePara")
let content = document.getElementById("content")
let deleteNumber = document.getElementById("blogDel")
let blogNumber = document.getElementById("blogNumber")
let delPara = document.querySelector(".delPara")
let showParag = document.getElementById("showPara")
let saveSec = document.querySelector(".saveSec")
let history = document.getElementById("History")
let returnBtn = document.getElementById("return")
let returnHisBtn = document.getElementById("returnHis")
const historyDatas = document.querySelector(".history-datas")


returnBtn.addEventListener("click",()=>{
    writeBtn.style.display= "flex"
    history.style.display = "none"
    showBtn.style.display = "flex"
    saveSec.style.display = "none"
})
returnHisBtn.addEventListener("click",()=>{
    writeBtn.style.display= "flex"
    history.style.display = "none"
    showBtn.style.display = "flex"
    saveSec.style.display = "none"
})

writeBtn.addEventListener("click",()=>{
    saveSec.style.display = "flex"
    history.style.display = "none"
    writeBtn.style.display = "none"
    showBtn.style.display = "none"
    console.log("clicked")
})
showBtn.addEventListener("click",()=>{
    history.style.display = "flex"
    showBtn.style.display = "none"
    saveSec.style.display = "none"
    showBtn.style.display = "none"
    writeBtn.style.display = "none"
    console.log("click")
})

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
    // let a = JSON.stringify(localStorage)
    let keys = Object.keys(localStorage)
     console.log(keys)
    for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    
    var data = localStorage.getItem(key);
    
    console.log(data)
    // historyDatas.innerHTML = `
    // <div id='title'>${a.}`

    // showParag.innerHTML = `<h2>All the restored blogs:<h2><br>${JSON.stringify(localStorage)}`
    // console.log(localStorage)
}
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