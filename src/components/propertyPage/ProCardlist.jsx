import React from "react";
import ProCard from './PropCard'
import "./prostyle.css";
export default function ProCardlist({ property }) {
  return (
    <>
    <div className="catoon">
      <div className="container">
        <div className="row g-3">
          {property.map((p) => (
            <ProCard
              key={p.id}
            //   {...p}
              name={p.name}
              price={p.price}
              rating={p.rating}
              img={p.img}
              offprice={p.offprice}
            />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
