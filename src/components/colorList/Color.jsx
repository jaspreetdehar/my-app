import React from "react";

const Color = ({ colors }) => {
  return (
    <div>
      {colors.map((p) => (
        <p>
          {p.name}
        </p>
      ))}
    </div>
  );
};

export default Color;
