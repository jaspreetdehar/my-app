import React from "react";

const CardHtml = () => {
  const randm = Math.floor(Math.random() * 150);
  return (
    <div className="col-md-4">
      <div className="card">
        <>
          <h3>PokeNom:( {randm}</h3>
          <img
            
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randm}.png`}
            className="card-img-top"
            alt="..."
          />
        </>
      </div>
    </div>
  );
};

export default CardHtml;
