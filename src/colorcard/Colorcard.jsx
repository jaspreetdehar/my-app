import React, { useState } from 'react'


export default function Colorcard() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange",];

  const colorchnge = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
const [color, setColor] = useState(colorchnge())
  
const clickCard=()=>{
  setColor(colorchnge)
}

  return (
    <>
      <div className="card" onClick={clickCard} style={{ backgroundColor:color,width:"100px",height:"100px"}}>
      <h3 style={{alignItems:"center",textAlign:"center"}}>Dehar</h3>
      </div>    
    </>
  );
}
