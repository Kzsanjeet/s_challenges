const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const display = document.getElementById("dis")
const playerWin = document.getElementById("playerwin")
const computerWin = document.getElementById("computerwin")
const drawMatch = document.getElementById("draw")

let total = 0
let  comp = 0
let draw = 0

let computerChoice = ()=>{

    let choice = ["rock","paper",'scissor']
    let computer = choice[Math.floor(Math.random()*choice.length)]
    return computer
}
function playGame(user,computer){   
    if(user === computer){
        let result = "It is tie"
        if (result === "It is tie"){
            let e = draw += 1
            drawMatch.textContent = e
            console.log(draw)
        }
        console.log(result)
        display.textContent = result
    }else if(user === "rock" && computer === "scissor"){
        let result = "You win"
        if (result === "You win"){
            let d = total+=1
            playerWin.textContent = d
        }
        console.log(total)
        display.textContent= result
        console.log('You win')
    }else if(user ==="paper"&& computer ==="rock"){
        let result = "You win"
        if (result === "You win"){
            let c = total+=1
            playerWin.textContent = "Player"
            playerWin.textContent = c
        }
        display.textContent= result
    }else if (user === "scissor" && computer === "paper"){
        let result = "You win"
        if (result === "You win"){
            let b = total+=1
            playerWin.textContent = b
        }
        display.textContent= result
    }else{
        let result = "You loose"
        if( result === "You loose"){
            let a = comp+=1
            computerWin.textContent = a
        }
        display.textContent = result
    }
}
rock.addEventListener("click",()=>{
    playGame('rock',computerChoice())
})
paper.addEventListener('click',()=>{
    playGame('paper',computerChoice())
    
})
scissor.addEventListener("click",()=>{
    playGame('scissor',computerChoice())
})