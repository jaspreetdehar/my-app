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
    const handleLoClick =()=>{
      const newText = text.toLowerCase();
      setText(newText)
    }
      



  return (
    <>
        <div>
      <h1>{props.heading}</h1>
      <div className="mb-2">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary me-2" onClick={handleUpClick}>convert to upercase</button>
      <button className="btn btn-primary me-2" onClick={handleLoClick}>convert toLowerCase</button>
      <button className="btn btn-primary me-2" onClick={handleLoClick}>convert toLowerCase</button>
      <button className="btn btn-primary me-2" onClick={handleLoClick}>convert toLowerCase</button>
    </div>
    <div className="container mt-4">
      <h1>Your Text Summary</h1>
      <p>{`${text.split(" ").length}words and ${text.length} characters`}</p>
      <p>{0.08 * text.split(" ").length}Minutes Read</p>
      <h3>preview</h3>
      <p>{text}</p>
    </div>
    </>
      )
}