import React, { useState } from 'react'
import image1 from '../images/heart.png'
import image from '../images/heart(1).png'

export default function Dil(props) {
  const [heart, setHeart] = useState(image)
const handleClick = () =>{
 heart===image ? setHeart(image1) : setHeart(image)
}

  return (
    <>
    <div className="container">
      <img src={heart} onClick={handleClick}  alt="" style={{width:"50px",height:"50px"}} /><br/>
    </div>
    </>
  )
}
