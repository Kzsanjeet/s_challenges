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