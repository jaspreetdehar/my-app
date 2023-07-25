import React,{useState} from "react";
import ObjectCard from "./ObjectCard.jsx";

export default function Objectlist({ cartoon },props) {
  const  newcartoon = cartoon.slice(0,5);
  const [card ,setCard]=useState(newcartoon)
  // console.log(card)
 const showMore= () =>{
  const oldCard= card.length + 10
  const nextCard =  cartoon.slice(0,oldCard)
  setCard(nextCard)
  
}

  return (
    <>
      <div className="catoon">
        <div className="container">
          <div className="row g-4">
            {card.map((a,index) => (
              <>
              <ObjectCard {...a} key = {index}/>                  
              </>
            ))}
            {card.length !== cartoon.length && <div className="button d-flex justify-content-center "><button type="button" onClick={showMore}className={`btn btn-outline-${props.mode === 'light' ? 'green' : 'light'}`}>show more</button> </div> }
            
          </div>
        </div>
      </div>
    </>
  );
}
