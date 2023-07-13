import React from 'react'



const Coin = (props) => {
    // const {val1,val2}=props
  
  return (
        <>
    <div>
        <p>{props.val1}{props.val2}</p>
      {props.val1==props.val2 && <span>match</span>}
    </div>
    </>
  )
}

export default Coin
