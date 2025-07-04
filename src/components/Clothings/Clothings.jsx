import "../Clothings/Clothings.css";
import React, { useState } from "react";
import shirtImg from "../assets/shirt.jpg";
import tshirtImg from "../assets/tshirt.jpg";
import jeansImg from "../assets/jeans.jpg";
import frockImg from "../assets/frock.jpg";
import skirtImg from "../assets/skirt.jpg";
import turtleneckImg from "../assets/turtleneck.jpg";


const clothingItems = [
  {
    id: 1,
    name: "Shirt",
    brand: "Arrow",
    material: "Cotton, Slim Fit",
    price: 499,
    image: shirtImg,
  },
  {
    id: 2,
    name: "T-Shirt",
    brand: "H&M",
    material: "100% Organic Cotton, Regular Fit",
    price: 399,
    image: tshirtImg,
  },
  {
    id: 3,
    name: "Jeans",
    brand: "Levi's",
    material: "Denim, Skinny Fit",
    price: 999,
    image: jeansImg,
  },
  {
    id: 4,
    name: "Frock",
    brand: "Max Fashion",
    material: "Rayon Blend, Flared Style",
    price: 799,
    image: frockImg,
  },
  {
    id: 5,
    name: "Skirt",
    brand: "Zara",
    material: "Polyester, High Waist",
    price: 599,
    image: skirtImg,
  },
  {
    id: 6,
    name: "Turtle Neck",
    brand: "Uniqlo",
    material: "Wool Blend, Slim Fit",
    price: 699,
    image: turtleneckImg,
  },
];

const Clothings = ({ addToCart }) => {

const [product, setProduct] = useState(clothingItems);
const [cart, setCart] = useState([]);

  return (
    <div className="product-container">
      {clothingItems.map((item) => (
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

export default Clothings;