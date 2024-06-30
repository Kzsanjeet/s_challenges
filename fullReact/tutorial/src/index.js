// import React from "react"
// import ReactDom from "react-dom"



// function Greeting(){
//   return (
//     <div>
//         <h4>thid is sanjeet thapa this is my first component</h4>
//         <div>
//         <ul>
//           <li>
//             <a href="index.html">Hello World</a>
//           </li>
//         </ul>
//         </div>  
//     </div>
// )
// } 



// ReactDom.render(<Greeting/>,document.getElementById("root"))


// component must always be capitalize
// you must return sth after initializing component



import React from "react"
import ReactDom from "react-dom"

//nested components, react tools

function Greeting(){
  return (
    <div>
       <Person/>
       <Person2/> 
    </div>
)
} 

const Person = () => <h2>Saanjeet Thapa</h2>
const Person2 = () => <h2>Sanjeet Thapa</h2>

ReactDom.render(<Greeting/>,document.getElementById("root"))



