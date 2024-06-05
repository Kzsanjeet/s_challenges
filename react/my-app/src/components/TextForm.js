import React, {useState} from 'react'



export default function TextForm(props) {
    const[text, setText] = useState("Enter text here")
    // text = "new text" // wrong way to change the state 
    // setText("new text") // correct way to change the state
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} rows="3"></textarea>
            </div>
            <button className="btn btn-primary">Convert to Uppercase</button>
        </div>
    )
}
