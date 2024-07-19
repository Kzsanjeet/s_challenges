import React from 'react'
import { useState } from 'react'

// function Event() {
//     const handleClick=() =>{
//         alert("Hello World")
//     }
//   return (
//     <div>
//       <button onClick={handleClick}>
//         Click Me
//       </button>
//     </div>
//   )
// }

// using use state

function Event(){
    const[count, setCount] = useState(0)
    function handleClick(){
        setCount(count +1)
    }
    return(
        <div>
            <button onClick={handleClick}>Click Me {count}</button>
        </div>
    )
}

// export default MyButton

export default Event
