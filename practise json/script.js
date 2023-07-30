const btn = document.getElementById("btn")
const view = document.getElementById("view")
const display = document.querySelector(".display")

function fetching(){
    let data = fetch("first.json")
    data.then((response)=>{
        return response.json()
    }).then((result)=>{
        // console.log(result)
        const name = document.getElementById("value1")
        const contact = document.getElementById("value2")
        const address = document.getElementById("value3")
        let jdata = {
            "Name":name.value,
            "Contact":contact.value,
            "Address":address.value
        }
        result.push(jdata)
        console.log(result)
        name.value = ""
        contact.value = ""
        address.value = ""
        display.textContent = JSON.stringify(result)
    })  
                  
}
// fetching()
btn.addEventListener("click",()=>{
    fetching()
})
view.addEventListener("click", ()=>{

})
