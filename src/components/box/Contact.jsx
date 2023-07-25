import React, {useState} from "react";

export default function Contact(props) {
    const [text, setText] = useState('');

    // uppercase function
    const handleUpClick =()=>{
        const newText = text.toUpperCase();
        setText(newText);
        
    }
    // lowercase function
    const handleLoClick =()=>{
      const newText = text.toLowerCase();
      setText(newText);
    }
    // copy function
    const handleCopy =()=>{
      let text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    // rest function
    const handleRest =()=>{
      const newText = '';
      setText(newText);
    }
    // remove extra space function
    const handleExtra=()=>{
      const newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    





    const  handleOnChange =(event)=>{
        setText(event.target.value);
    }
      
  return (
    <>
      <div className="container" style={{color: props.mode === 'light' ? 'dark' : 'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-2 " >
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light' ? 'white' : 'black',color: props.mode === 'dark' ? 'green' : null}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary me-2" onClick={handleUpClick}>convert to upercase</button>
      <button className="btn btn-primary me-2" onClick={handleLoClick}>convert to LowerCase</button>
      <button className="btn btn-primary me-2" onClick={handleCopy}>To Copy</button>
      <button className="btn btn-primary me-2" onClick={handleExtra}>Extra Space remove</button>
      <button className="btn btn-primary me-2" onClick={handleRest}>Clear Text</button>
    </div>
    <div className="container mt-4" style={{color: props.mode === 'light' ? 'dark' : 'white'}}>
      <h1>Your Text Summary</h1>
      <p>{`${text.split(" ").length}words and ${text.length} characters`}</p>
      <p>{0.08 * text.split(" ").length}Minutes Read</p>
      <h3>preview</h3>
      <p>{text}</p>
    </div>
    </>
      )
}