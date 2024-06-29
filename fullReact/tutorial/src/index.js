import React from "react"
import ReactDom from "react-dom"

function Greeting(){
  return (
    <div>
        <h4>thid is sanjeet thapa this is my first component</h4>
        <div>
        <ul>
          <li>
            <a href="index.html">Hello World</a>
          </li>
        </ul>
        </div>  
    </div>
)
} 

ReactDom.render(<Greeting/>,document.getElementById("root"))


// component must always be capitalize
// you must return sth after initializing component


