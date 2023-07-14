import React from 'react'
import {data} from './P'
 
const Pl = () => {
    return (
        <div>
            {data.map((p) =>
              // <p key= {p.id}> {p.item}</p>
              <li style={{textDecoration : p.available ? "" :"line-through", color : p.available ? "" :"red"}}> {p.id}: {p.item}</li>
        )}
        </div>
    )
}

export default Pl

