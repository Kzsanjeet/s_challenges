let card1 = document.querySelector(".card1")

let slideIndex = 0;
const slideShow = ()=>{
    card1.style.transform = `translateX(-${slideIndex*5}%)`
}
let showAllProduct = ()=>{
    let f = fetch("product.json")
    f.then((res)=>{
    return res.json()
    }).then((result)=>{
    console.log(result)
    let shoesData = result.shoes
    console.log(shoesData)
    cardOne(result)
})
}
showAllProduct()

let cardOne = (result)=>{
    let shoesData = result.shoes
    card1.innerHTML=""
    for(let i= 0; i<shoesData.length; i++){
        card1.innerHTML+=`
        <div class= "card" data-card-id='${shoesData[i].id}'>
        <div class= "imageBox">${shoesData[i].image}</div>
        <p  class = 'shoeName'>Price: ${shoesData[i].name}</P>
        <p  class = 'shoeBrand'>Brand: ${shoesData[i].price}</P>
        <p class = 'shoeRating'>Ratings: ${shoesData[i].ratings}</p>
        </div>
        `
    }

}
function selfServ(){
    if(slideIndex < card1.childElementCount -1){
        slideIndex++;
    }else{
        slideIndex = 0;
    }
    slideShow(slideIndex)
}
setInterval(selfServ,3000);
slideShow(slideIndex)