import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        setText(text.toUpperCase());
        props.showAlert("Converted to upper case", "success")
    }
    const handleDownClick=()=>{
        setText(text.toLowerCase())
        props.showAlert("Converted to lower case", "success")
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
        // props.showAlert("Typing", "success")

    }

    const handleCapClick = () => {
        // Reverse the text and update the state
        const reversedText = text.split('').reverse().join('');
        setText(reversedText);  
        props.showAlert("Reversed the text succesfully", "success")
      };

    const handleClearClick = () =>{
        const clearText = " "
        setText(clearText)
        props.showAlert("Cleared the text successfully", "success")
    }

    const handleCopy = () =>{
        const text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard", "success")
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ")) 
        props.showAlert("Removed the extra spaces", "success")  
     }
      
    const [text, setText] = useState("");

    return (
        <>
        <div className='container' style = {{color: props.mode === "dark"?"white":"dark"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    id="myBox" 
                    value={text} 
                    onChange={handleOnChange}
                    style = {{
                        backgroundColor: props.mode === "dark" ? "grey" : "white",
                        color: props.mode === "dark" ? "white" : "black"
                      }}
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
        <div className="container my-3" style={{color: props.mode === "dark"?"white":"black"}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p> 
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here."}</p>
        </div>
        </>
    )
}