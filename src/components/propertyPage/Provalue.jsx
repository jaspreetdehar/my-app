import ProCardlist from "./ProCardlist";
import PropCard from "./PropCard";


export default function Provlaue() {
    const properties = [
        { id: 129031, name: "Desert Yurt", rating: 4.9 , offprice: 200,price: 550, img: require("../../images/prop-1.jpg"), available: false },
        { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 , img: require("../../images/prop-2.jpg") , available: true},
        { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 1000, offprice: 800, img: require("../../images/prop-3.jpg")  , available: false},
        { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9,offprice: 200, price: 820, img: require("../../images/prop-4.jpg"), available: true  },
        { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140, img: require("../../images/prop-5.jpg") , available: false },
        { id: 129035, name: "Gold Miner Campground", rating: 3.6, price: 96, img: require("../../images/prop-6.jpg") , available: true },
    ];
  return (
  
      <>
      <ProCardlist property={properties} />  
      </>
  
  )
}

