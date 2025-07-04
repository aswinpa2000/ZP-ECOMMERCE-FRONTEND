import "./Electronics.css";
import React, { useState } from "react";
import laptopImg from "../assets/laptop.jpg";
import mobileImg from "../assets/mobile.jpg";
import tvImg from "../assets/smarttv.jpg";
import earbudsImg from "../assets/earbud.jpg";
import speakerImg from "../assets/speaker.jpg";
import tabletImg from "../assets/tablet.jpg";

const electronicsItems = [
  {
    id: 101,
    name: "Laptop",
    brand: "HP",
    material: "i5, 8GB RAM, 512GB SSD",
    price: 47999,
    image: laptopImg,
  },
  {
    id: 102,
    name: "Mobile",
    brand: "Samsung",
    material: "6.5” Display, 128GB Storage",
    price: 18999,
    image: mobileImg,
  },
  {
    id: 103,
    name: "Smart TV",
    brand: "Sony Bravia",
    material: "43'' 4K HDR Android TV",
    price: 37999,
    image: tvImg,
  },
  {
    id: 104,
    name: "Earbuds",
    brand: "OnePlus",
    material: "Noise Cancellation, 30hr Battery",
    price: 2999,
    image: earbudsImg,
  },
  {
    id: 105,
    name: "Bluetooth Speaker",
    brand: "Marshal",
    material: "Bass Boost, 12hr Battery",
    price: 4999,
    image: speakerImg,
  },
  {
    id: 106,
    name: "Tablet",
    brand: "Lenovo",
    material: "10.1'' Display, 4GB RAM",
    price: 15999,
    image: tabletImg,
  },
];


const Electronics = ({ addToCart }) => {

const [product, setProduct] = useState(electronicsItems);
const [cart, setCart] = useState([]);


  return (
    <div className="product-container">
      {electronicsItems.map((item) => (
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

export default Electronics;