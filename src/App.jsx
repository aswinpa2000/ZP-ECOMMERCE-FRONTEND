import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Heropage from "./components/Heropage/Heropage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Clothings from "./components/Clothings/Clothings";
import Watches from "./components/Watches/Watches";
import Electronics from "./components/Electronics/Electronics";
// import Signup from "./components/Signup/Signup";
// import SignIn from "./components/Signin/Signin";

function App() {
  const [cart, setCart] = useState([]);

  
  const addToCart = (product) => {
  setCart((prevCart) => [...prevCart, product]);
};


  const deleteFromCart = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== indexToRemove));
  };

  return (
    <>
      <div>
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Heropage />} />
          {/* <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<SignIn/>}/> */}
          <Route path="/cart" element={<Cart cartItems={cart} onDelete={deleteFromCart} />} />
          <Route path="/clothings" element={<Clothings addToCart={addToCart} />} />
          <Route path="/electronics" element={<Electronics addToCart={addToCart} />} />
          <Route path="/watches" element={<Watches addToCart={addToCart} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;