import "./Watches.css";
import React, { useState } from "react";
import analogImg from "../assets/analogwatch.jpg";
import digitalImg from "../assets/digitalwatch.jpg";
import smartwatchImg from "../assets/smartwatch.jpg";
import lWatchImg from "../assets/leatherwatch.jpg";
import sportsImg from "../assets/sportswatch.jpg";
import luxuryImg from "../assets/luxurywatch.jpg";


const watchItems = [
  {
    id: 201,
    name: "Analog Watch",
    brand: "Titan",
    material: "Leather Strap, Water Resistant",
    price: 1999,
    image: analogImg,
  },
  {
    id: 202,
    name: "Digital Watch",
    brand: "Casio",
    material: "LED Display, Alarm & Timer",
    price: 1499,
    image: digitalImg,
  },
  {
    id: 203,
    name: "Smartwatch",
    brand: "Noise",
    material: "Bluetooth Calling, Fitness Tracker",
    price: 2999,
    image: smartwatchImg,
  },
  {
  id: 204,
  name: "Leather Watch",
  brand: "Fossil",
  material: "Genuine Leather Strap, Quartz Movement",
  price: 4599,
  image: lWatchImg,
  },
  {
    id: 205,
    name: "Sports Watch",
    brand: "boAt",
    material: "SpO2, Heart Rate Monitor",
    price: 1999,
    image: sportsImg,
  },
  {
    id: 206,
    name: "Luxury Watch",
    brand: "Rolex",
    material: "Gold Plated, Water Proof",
    price: 120000,
    image: luxuryImg,
  },
];


const Watches = ({ addToCart }) => {
  const [product, setProduct] = useState(watchItems);
  const [cart, setCart] = useState([]);


  const deleteFromCart = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== indexToRemove));
  };
  return (
    <div className="product-container">
      {watchItems.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt={item.name} className="product-image" />
          <h3 className="product-name">{item.name}</h3>
          <p className="product-price">{item.price}</p>
          <button className="add-to-cart" onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Watches;