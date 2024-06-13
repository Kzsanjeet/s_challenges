import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        setText(text.toUpperCase());
    }
    const handleDownClick=()=>{
        setText(text.toLowerCase())
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCapClick = () => {
        // Reverse the text and update the state
        const reversedText = text.split('').reverse().join('');
        setText(reversedText);
      };

    const handleClearClick = () =>{
        const clearText = " "
        setText(clearText)
    }

    const handleCopy = () =>{
        const text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))   
     }
      
    const [text, setText] = useState("");

    return (
        <>
                <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    id="myBox" 
                    value={text} 
                    onChange={handleOnChange} 
                    rows="3">
                </textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCapClick}>Reverse the word</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
          
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p> 
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}