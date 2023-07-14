import React, {useState} from "react";

export default function Contact(props) {
    const [text, setText] = useState('');

    
    const handleUpClick =()=>{
        const newText = text.toUpperCase();
        setText(newText)
        
    }
    const  handleOnChange =(event)=>{
        setText(event.target.value);
    }



  return (
        <div>
      <h1>{props.heading}</h1>
      <div className="mb-2">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>convert to upercase</button>
    </div>
      )
}