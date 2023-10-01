let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")
let card3 = document.querySelector(".card3")
let card4 = document.querySelector(".card4")
let nextButton = document.getElementById("next")
let nextButton1 = document.getElementById("next1")
let nextButton2 = document.getElementById("next2")
let nextButton3 = document.getElementById("next3")
let prevButton = document.getElementById("prev")
let prevButton1 = document.getElementById("prev1")
let prevButton2 = document.getElementById("prev2")
let prevButton3 = document.getElementById("prev3")
let detail1  = document.querySelector(".detail1")

let slideIndex = 0;
const slideShow = ()=>{
    card1.style.transform = `translateX(-${slideIndex*5}%)`
    card2.style.transform = `translateX(-${slideIndex*10}%)`
    card3.style.transform = `translateX(-${slideIndex*5}%)`
    card4.style.transform = `translateX(-${slideIndex*15}%)`
    
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
    let jacketsData = result.jackets
    // console.log(pantsData)
    // console.log(tshirtsData)
    // console.log(shoesData)
    cardOne(shoesData)
    cardTwo(tshirtsData)
    cardThree(pantsData)
    cardfour(jacketsData)

    showShoeData(shoesData)
    showShoeData(tshirtsData)
    showShoeData(pantsData)
    showShoeData(jacketsData)
})
}
showAllProduct()



let cardOne = (shoesData)=>{
    card1.innerHTML=""
    for(let i= 0; i<shoesData.length; i++){
        card1.innerHTML+=`
        <div class= "card" data-card-id='${shoesData[i].id}'>
        <div class= "imageBox">
        <img src = "${shoesData[i].image}" alt="image"</div>
        <p  class = 'shoeName'>Price: $ ${shoesData[i].price}</P>
        <p  class = 'shoeBrand'>Brand: ${shoesData[i].brand}</P>
        <p class = 'shoeRating'>Ratings: ${shoesData[i].ratings}</p>
        </div>
        `
    }

}

let cardTwo = (tshirtsData)=>{
    card2.innerHTML=""
    for(let i= 0; i<tshirtsData.length; i++){
        card2.innerHTML+=`
        <div class= "card" data-card-id='${tshirtsData[i].id}'>
        <div class= "imageBox">
        <img src = "${tshirtsData[i].image}" alt="image"</div>
        <p  class = 'shoeName'>Price: $ ${tshirtsData[i].price}</P>
        <p  class = 'shoeBrand'>Brand: ${tshirtsData[i].brand}</P>
        <p class = 'shoeRating'>Ratings: ${tshirtsData[i].ratings}</p>
        </div>
        `
    }

}

let cardThree = (pantsData)=>{
    card3.innerHTML=""
    for(let i= 0; i<pantsData.length; i++){
        card3.innerHTML+=`
        <div class= "card" data-card-id='${pantsData[i].id}'>
        <div class= "imageBox">
        <img src = "${pantsData[i].image}" alt="image"</div>
        <p  class = 'shoeName'>Price: $ ${pantsData[i].price}</P>
        <p  class = 'shoeBrand'>Brand: ${pantsData[i].brand}</P>
        <p class = 'shoeRating'>Ratings: ${pantsData[i].ratings}</p>
        </div>
        `
    }
}

let cardfour = (jacketsData)=>{
    card4.innerHTML=""
    for(let i= 0; i<jacketsData.length; i++){
        card4.innerHTML+=`
        <div class= "card" data-card-id='${jacketsData[i].id}'>
        <div class= "imageBox">
        <img src = "${jacketsData[i].image}" alt="image"</div>
        <p  class = 'shoeName'>Price: $ ${jacketsData[i].price}</P>
        <p  class = 'shoeBrand'>Brand: ${jacketsData[i].brand}</P>
        <p class = 'shoeRating'>Ratings: ${jacketsData[i].ratings}</p>
        </div>
        `
    }
}

//for next button
nextButton.addEventListener("click",()=>{
    if(slideIndex<= card1.childElementCount -1 ){
        slideIndex++;
    }else{
        slideIndex =0
    }
    slideShow(slideIndex)
    })
//for prev button
prevButton.addEventListener("click",()=>{
    if(slideIndex >=0){
        slideIndex--
    }else{
        slideIndex <= card1.childElementCount -1
    }
    slideShow(slideIndex)
})
nextButton1.addEventListener("click",()=>{
    if(slideIndex<= card2.childElementCount -1 ){
        slideIndex++;
    }else{
        slideIndex =0
    }
    slideShow(slideIndex)
    })
prevButton1.addEventListener("click",()=>{
    if(slideIndex >=0){
        slideIndex--
    }else{
        slideIndex <= card2.childElementCount -1
    }
    slideShow(slideIndex)
})
nextButton2.addEventListener("click",()=>{
    if(slideIndex<= card3.childElementCount -1 ){
        slideIndex++;
    }else{
        slideIndex =0
    }
    slideShow(slideIndex)
    })
prevButton2.addEventListener("click",()=>{
    if(slideIndex >=0){
        slideIndex--
    }else{
        slideIndex <= card3.childElementCount -1
    }
    slideShow(slideIndex)
})
nextButton3.addEventListener("click",()=>{
    if(slideIndex<= card4.childElementCount -1 ){
        slideIndex++;
    }else{
        slideIndex =0
    }
    slideShow(slideIndex)
    })
prevButton3.addEventListener("click",()=>{
    if(slideIndex >=0){
        slideIndex--
    }else{
        slideIndex <= card4.childElementCount -1
    }
    slideShow(slideIndex)
})


function selfServ(){
    if(slideIndex < card1.childElementCount -1){
        slideIndex++;
    }else{
        slideIndex = 0;
    }
    slideShow(slideIndex)
}
setInterval(selfServ,4000);
slideShow(slideIndex)

const showShoeData = (shoesData)=>{
    card1.addEventListener("click",(e)=>{
        const card  = e.target.closest(".card")
        if(card){
            //get the data-card-id attribute to  identify the clicked card
            const cardId = card.getAttribute("data-card-id")
            console.log('id:'+ cardId)

            //Use the cardId to find the corresponding data in your result array
            const clickedCardData = shoesData.find(item =>{
                return item.id === Number(cardId)
            })
            console.log(clickedCardData)
            //calling the function
            displayExtraDetails(clickedCardData,detail1)
        }
    })

}

function displayExtraDetails(clickedCardData,detailBox){
    if(clickedCardData){
        detailBox.innerHTML = `
        <img src="${clickedCardData.image}">

        <div class= "extra-data">
            <p> Name:${clickedCardData.name}</p><br>
            <p> Price:$${clickedCardData.price}</p><br>
            <p> Company: ${clickedCardData.brand}</P><br>
            <p> Ratings: ${clickedCardData.ratings}</p><br>
            <div class="item-colors">
                Colors: <br>
                <div class="color-box" style ="background-color:${clickedCardData.colors[0]}"></div>
                <div class="color-box" style ="background-color:${clickedCardData.colors[1]}"></div>
                <div class="color-box" style ="background-color:${clickedCardData.colors[2]}"></div>
                <br><br>
            </div>
            <p>Description:</p><br>
            <p>${clickedCardData.description}</p><br>
            <button class="close">Close</button>
        </div>
        

        `
        document.querySelector(".close").addEventListener("click", () => {
            detailBox.style.display = "none";
        });
        detailBox.style.display = "flex"
    }
}
