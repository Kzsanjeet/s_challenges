
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const display = document.getElementById("dis")

let computerChoice = ()=>{

    let choice = ["rock","paper",'scissor']
    let computer = choice[Math.floor(Math.random()*choice.length)]
    // console.log(computer)
    return computer

}



function playGame(user,computer){
    if(user === computer){
        let result = "It is tie"
        display.textContent = result
    }else if(user === "rock" && computer === "scissor"){
        let result = "You win"
        display.textContent= result
        //return "You win"
        console.log('You win')
    }else if(user ==="paper"&& computer ==="rock"){
        let result = "You win"
        display.textContent= result
        // return "You win"
        console.log('You win')
    }else if (user === "scissor" && computer === "paper"){
        let result = "You win"
        display.textContent= result
        // return "You win!"
        console.log('You win')
    }else{
        let result = "You loose"
        display.textContent = result
        // return "You defeated.."
        console.log('You loose')
    }
    

}
// function playGame(v,n){
//     console.log("hello")
// }

rock.addEventListener("click",()=>{
    // console.log(computerChoice())
    playGame('rock',computerChoice())
})
paper.addEventListener('click',()=>{
    playGame('paper',computerChoice())
})
scissor.addEventListener("click",()=>{
    playGame('scissor',computerChoice())
})