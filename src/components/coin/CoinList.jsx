import React from 'react'
import Coin from './Coin'
const CoinList = (val1,val2) => {
    const rend1=Math.floor(Math.random()*4)
    const rend2=Math.floor(Math.random()*4)
  return (
    <div>
      <Coin val1={rend1} val2={rend2}></Coin> 
    </div>
  )
}

export default CoinList
