import React, { useState } from 'react';
import "./App.css";
import bakeryData from "./assets/bakery-data.json";
import BakeryItemMenu from "./components/BakeryItem";

/* Initialize bakery data images */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [cart, setCart] = useState([]);

  const addToCartHandler = (item) => {
    setCart(currentCart => [...currentCart, item]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="App">
      <h1>Sarah's Bakery</h1>
      <div className="app-container">
        <div className="bakery-items-container">
          {bakeryData.map((item, index) => (
            <BakeryItemMenu
              key={index}
              image={item.image}
              name={item.title}
              description={item.description}
              price={item.price}
              addToCart={() => addToCartHandler(item)}
            />
          ))}
        </div>
        <div className="cart-container">
          <h2>Cart</h2>
          {cart.length === 0 && <p>The cart is empty.</p>}
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
          {cart.length > 0 && <p>Total: ${calculateTotal().toFixed(2)}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
