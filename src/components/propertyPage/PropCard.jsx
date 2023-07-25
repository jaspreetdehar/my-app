import React from "react";

export default function PropCard({
  name,
  rating,
  price,
  img,
  offprice,
  available,
})
 {
  const discount = Math.floor((offprice / price) * 100);
  return (
    <>
      <div className="col-md-4">
        <div className="card">
          <div className="card-image">
            <img src={img} alt="" />
          </div>
          <div className="card-content">
            <h3>{name}</h3>
            <div className="price">
              <span className="rating">
                {rating}
              </span>
              <span className="prize pl-1">
              <strong>Price: ${price}</strong>
              {offprice && (<span className="offprice">${offprice}</span>)}
              </span>
            </div>
              {offprice &&(<span className="discount">Discount: {discount}%</span>)}
            <a
              href="#"
              className="btn btn-outline-success mt-4"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
