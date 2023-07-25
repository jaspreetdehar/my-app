import React from "react";

export default function Colorcard() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange",];

  const colorchnge = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  //   const cardstyle=()=>{
  //     backgroundColor = colorchnge()
  //   }
  return (
    <>
        <div className="container">
       
          <div className="card" style={{ backgroundColor: colorchnge() }}>
            <h3>dsds</h3>
          </div>
           
         
     
      </div>
    </>
  );
}
