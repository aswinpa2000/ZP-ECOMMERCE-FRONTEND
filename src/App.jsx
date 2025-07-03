import './App.css'
import Navbar from './components/Navbar/Navbar'
import Newsletter from './components/Newsletter/Newsletter'
import NewCollections from './components/Newcollections/Newcollections'
import Heropage from './components/Heropage/Heropage'
import tv_image from "./components/assets/tv-image.avif"
import jeans from "./components/assets/jeans.avif"
import shirt from "./components/assets/shirt_image.avif"
import iphone_image from "./components/assets/iphone_image.png"
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart/Cart'

function App() {
  
  let products = [
    {
      id: 1,
      name: "TV",
      image: tv_image,
      price: "$700"
    },
    {
      id: 2,
      name: "MENS SHIRT",
      image: shirt,
      price: "$600"
    },
    {
      id: 3,
      name: "IPHONE 15 PRO",
      image: iphone_image,
      price: "$999"
    },
    {
      id: 4,
      name: "MENS JEANS",
      image: jeans,
      price: "$600"
    }
    ,
    {
      id: 5,
      name: "MENS JEANS",
      image: jeans,
      price: "$600"
    }
  ]

  const [product, setProduct] = useState(products);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Cart:", cart);
  };


  const deleteFromCart = (indexToRemove) => {
  setCart((prevCart) => prevCart.filter((_, i) => i !== indexToRemove));
};

  return (
    <>
      <div>
        <Navbar cartCount={cart.length}/>
        <Routes>
        <Route path="/" element={<Heropage prod={product}  addToCart={addToCart}/>}/>
        <Route path="/cart" element={<Cart cartItems={cart} onDelete={deleteFromCart} />} />
        {/* <Route path="/login" element={<Login/>}/> */}

        </Routes>
        
        {/* Send all products at once */}
        
        <NewCollections />
        <Newsletter />
      </div>
    </>
  )
}

export default App
