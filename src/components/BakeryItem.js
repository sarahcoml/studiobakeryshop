import React from 'react';
import "./BakeryItem.css";

const BakeryItemMenu = ({ image, name, description, price, addToCart }) => {
  return (
    <div className="bakery-item">
      <div className="bakery-item-img-container">
        <img src={image} alt={name} className="bakery-item-img" />
      </div>
      <div className="bakery-item-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: ${price.toFixed(2)}</p> 
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default BakeryItemMenu;
