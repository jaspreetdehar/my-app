import React from 'react'
import Color from './Color'

const ColorList = () => {
  const properties = [
    { id: 129031, name: "Desert Yurt", rating: 4.9 , offprice: 200,price: 550,  available: false },
    { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250  , available: true},
    { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 1000, offprice: 800 , available: false},
    { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9,offprice: 200, price: 820,  available: true  },
    { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140,  available: false },
    { id: 129035, name: "Gold Miner Campground", rating: 3.6, price: 96, available: true },
];

  return (
    <div>
      <Color colors = {properties}/>
    </div>
  )
}

export default ColorList
