import React from "react";
import "./productsList.css";

const ProductsList = ({ data }) => {
  return (
    <div className="container">
      {data.map(({ id, category, description, image, price }) => {
        return (
          <div className="card" key={id}>
            <h3>{category}</h3>
            <p>{description}</p>
            <img src={image} alt={category} width="100%" height="300px" />
            <p>Price: {price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
