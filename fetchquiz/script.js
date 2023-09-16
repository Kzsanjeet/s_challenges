let btnPrev = document.getElementById("prev")
let btnNext = document.getElementById("next")
let question = document.getElementById("ques")
let option2 = document.getElementById("opt2")
let option1 = document.getElementById("opt1")
let option3 = document.getElementById("opt3")
let option4 = document.getElementById("opt4")
let points = document.getElementById("point")
let n = 0
let count = 0

let display = ()=>{
   let a =  fetch("quiz.json")
    a.then((res)=>{
    return res.json()
    }).then((result)=>{
    console.log(result)
    let b = result.quiz_questions[n].question
    question.innerHTML=`
    <h1>${b}</h1>`
    console.log(b)

    let ans = result.quiz_questions[n].answer
    console.log("checking answer")
    console.log(ans)

    let c = result.quiz_questions[n].options[0]
    option1.innerHTML=`
    <h2>${c}</h2>`
    console.log(c)
    
    function button1(){
        if(c === ans){
            count+=5
            console.log(count)
        }else{
            count+=0
            }
        }
    option1.addEventListener("click",()=>{
        button1()
    })

    let d = result.quiz_questions[n].options[1]
        option2.innerHTML=`
        <h2>${d}</h2>`
        console.log(d)

    function button2(){
        if(d === ans){
            count+=5
        }else{
            count+=0
        }
    }
    option2.addEventListener("click",()=>{
        button2()
    })

    let e = result.quiz_questions[n].options[2]
        option3.innerHTML=`
        <h2>${e}</h2>`
        console.log(e)

    function button3(){
        if(e === ans){
            count+=5
            console.log(e)
            console.log(ans)
        }else{
            count+=0
        }
    }
    option3.addEventListener("click",()=>{
        button3()
    })

    let f = result.quiz_questions[n].options[3]
    option4.innerHTML=`
    <h2>${f}</h2>`
    console.log(f)

    function button4(){
        if(f === ans){
            count+=5
        }else{
            count+=0
        }
    }

    option4.addEventListener("click",()=>{
        button4()
    })
})  
points.textContent = count
}
console.log("funn")
console.log(n)
display()

btnNext.addEventListener("click",()=>{
    n+=1;
    display()
})
btnPrev.addEventListener("click",()=>{
    n-=1;
    display()
})
