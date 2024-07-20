import React from 'react'
import { useState } from 'react'

function Hooks() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    function handleClick(){
        setCount(count + 1)
    }
    function handleClick1(){
        setCount1(count1 + 1)
        }
  return (
    <div>
        <h1>Counters that update together</h1>
        {/* <button onClick={handleClick}>Click Me {count}</button>
        <button onClick={handleClick1}>Click Me {count1}</button> */}
        <MyButton onClick={handleClick} count={count}/>
        <MyButton onClick={handleClick1} count1={count1}/>

    </div>
  )
}


function MyButton({count,onClick}){
    return(
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    )
}

// export default MyButton
export default Hooks
