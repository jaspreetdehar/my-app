import React from 'react'
import CardHtml from './CardHtml'

const CardImage = () => {
   const arr = [];
   for(let i =0;i<10;i++){
    arr.push(<CardHtml key = {i}/>)
   }
  return (
    <div className='row g-3'>
        {arr}
    </div>
  )
}

export default CardImage
