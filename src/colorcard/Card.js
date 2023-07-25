import React from 'react'
import Colorcard from './Colorcard'

const Card = () => {
    const arr = []
    for(let i = 0; i<15; i++){
        arr.push(<Colorcard/>)
    }
  return (
    <div>
      {arr}
    </div>
  )
}

export default Card
