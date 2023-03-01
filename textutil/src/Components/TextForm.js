import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was Clicked " + text)
        //setText(text.toUpperCase())
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleClearClick = () => {
        let newText = ("")
        setText(newText)
    }

    const handleBackClick = () => {
        let newText = text.split(" ").pop()
        setText(newText)
    }
    const handleOnChange = (event) => {
        //  console.log("handle onchnage")
        setText(event.target.value)
    }
    const [text, setText] = useState('enter the text')
    return (
        <>
            <div className='container'>
                <h1> {props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>clear text</button>
                <button className="btn btn-primary mx-1" onClick={handleBackClick}>backspace</button>
            </div>
            <div className='containermb-3'>
                <h1> Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} character </p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
