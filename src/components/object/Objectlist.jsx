import React from "react";
import ObjectCard from "./ObjectCard.jsx";

export default function Objectlist({ cartoon }) {
 const  newcartoon = cartoon.slice(0,5)
  return (
    <>
      <div className="catoon">
        <div className="container">
          <div className="row g-4">
            {newcartoon.map((a,index) => (
              <>
              <ObjectCard {...a} key = {index}/>                  
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
