let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")
let card3 = document.querySelector(".card3")
let card4 = document.querySelector(".card4")

let slideIndex = 0;
const slideShow = ()=>{
    card1.style.transform = `translateX(-${slideIndex*5}%)`
    card2.style.transform = `translateX(-${slideIndex*5}%)`
    card3.style.transform = `translateX(-${slideIndex*5}%)`
    card4.style.transform = `translateX(-${slideIndex*5}%)`
    
}
let showAllProduct = ()=>{
    let f = fetch("product.json")
    f.then((res)=>{
    return res.json()
    }).then((result)=>{
    console.log(result)
    let shoesData = result.shoes
    let tshirtsData= result.tshirts
    let pantsData = result.pants
    console.log(pantsData)
    console.log(tshirtsData)
    console.log(shoesData)
    cardOne(result)
    cardTwo(result)
    cardThree(result)
    cardfour(result)
})
}
showAllProduct()

let cardOne = (result)=>{
    let shoesData = result.shoes
    card1.innerHTML=""
    for(let i= 0; i<shoesData.length; i++){
        card1.innerHTML+=`
        <div class= "card" data-card-id='${shoesData[i].id}'>
        <div class= "imageBox">
        <img src = "${shoesData[i].image}" alt="image"</div>
        <p  class = 'shoeName'>Price: ${shoesData[i].name}</P>
        <p  class = 'shoeBrand'>Brand: ${shoesData[i].price}</P>
        <p class = 'shoeRating'>Ratings: ${shoesData[i].ratings}</p>
        </div>
        `
    }

}

let cardTwo = (result)=>{
    let tshirtsData = result.tshirts
    card2.innerHTML=""
    for(let i= 0; i<tshirtsData.length; i++){
        card2.innerHTML+=`
        <div class= "card" data-card-id='${tshirtsData[i].id}'>
        <div class= "imageBox">
        <img src = "${tshirtsData[i].image}" alt="image"</div>
        <p  class = 'shoeName'>Price: ${tshirtsData[i].name}</P>
        <p  class = 'shoeBrand'>Brand: ${tshirtsData[i].price}</P>
        <p class = 'shoeRating'>Ratings: ${tshirtsData[i].ratings}</p>
        </div>
        `
    }

}

let cardThree = (result)=>{
    let pantsData = result.pants
    card3.innerHTML=""
    for(let i= 0; i<pantsData.length; i++){
        card3.innerHTML+=`
        <div class= "card" data-card-id='${pantsData[i].id}'>
        <div class= "imageBox">
        <img src = "${pantsData[i].image}" alt="image"</div>
        <p  class = 'shoeName'>Price: ${pantsData[i].name}</P>
        <p  class = 'shoeBrand'>Brand: ${pantsData[i].price}</P>
        <p class = 'shoeRating'>Ratings: ${pantsData[i].ratings}</p>
        </div>
        `
    }
}

let cardfour = (result)=>{
    let jacketsData = result.jackets
    card4.innerHTML=""
    for(let i= 0; i<jacketsData.length; i++){
        card4.innerHTML+=`
        <div class= "card" data-card-id='${jacketsData[i].id}'>
        <div class= "imageBox">
        <img src = "${jacketsData[i].image}" alt="image"</div>
        <p  class = 'shoeName'>Price: ${jacketsData[i].name}</P>
        <p  class = 'shoeBrand'>Brand: ${jacketsData[i].price}</P>
        <p class = 'shoeRating'>Ratings: ${jacketsData[i].ratings}</p>
        </div>
        `
    }
}




function selfServ(){
    if(slideIndex < card1.childElementCount -1 || card2.childElementCount -1|| card3.childElementCount -1){
        slideIndex++;
    }else{
        slideIndex = 0;
    }
    slideShow(slideIndex)
}
setInterval(selfServ,3000);
slideShow(slideIndex)