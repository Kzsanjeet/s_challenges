const img = document.getElementById("img")
const btnR = document.getElementById("btnR")
const btnL = document.getElementById("btnL")

let showImg=(n)=>{
    let a= fetch("https://api.thecatapi.com/v1/images/search?limit=20")
    a.then((value)=>{
    return value.json()
    }).then((result)=>{
        console.log(result)
        let image = result[n].url;
        img.innerHTML = `
        <img src="${image}" alt="">`
    })
}
 // n is for index    
let n = 0;
showImg(n);
btnR.addEventListener('click',()=>{
    n +=1;
    showImg(n)
   })
   
btnL.addEventListener('click',()=>{
    n -= 1;
    showImg(n)
})

    
//enjoyyyy