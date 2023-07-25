import React from 'react'
import Colorcard from './Colorcard'

const Card = () => {
    const arr = []
    for(let i = 0; i<65; i++){
        arr.push(<Colorcard/>)
    }
  return (
    <div className="container">
    <div className="row mt-4"style={{display:"flex"}}>{arr}</div>
    
    </div>
  )
}

export default Card
