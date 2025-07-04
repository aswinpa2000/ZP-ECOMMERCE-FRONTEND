import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Heropage from "./components/Heropage/Heropage";
import { useEffect,useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Clothings from "./components/Clothings/Clothings";
import Watches from "./components/Watches/Watches";
import Electronics from "./components/Electronics/Electronics";



function App() {
  const [cart, setCart] = useState([]);
  

  const addToCart=async (product)=>{
        const cartItemData = {
         product_id: product.id,
         product_name: product.name,
         product_brand: product.brand,
         product_material: product.material, // This line intelligently picks material or specifications
         product_price: product.price,
         product_image: product.image
        };
        const response=await fetch("http://localhost:8010/insert",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(cartItemData),
        })
        if(response.status==201)
        {
            getCart();
            alert("Product Added Successfully!");
        }
        else{
            alert("Failed To Add New Task!")
        }
    };

    const getCart = async () => {
    const response = await fetch("http://localhost:8010/"); // Make sure this endpoint returns your cart array!
    const data = await response.json();
    setCart(data);
  };

  useEffect(() => {
    getCart();
  }, []);

  
const deleteCart = async (item) => {
  try {
    const response = await fetch(`http://localhost:8010/${item._id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Item deleted successfully!");
      getCart(); // Refresh cart after deletion
    } else if (response.status === 404) {
      alert("Item not found!");
    } else {
      alert("Failed to delete item.");
    }
  } catch (error) {
    alert("Error deleting item.");
    console.error(error);
  }
};

  return (
    <>
      <div>
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Heropage />} />
      
          <Route path="/cart" element={<Cart cartItems={cart} onDelete={deleteCart} />} />
          <Route path="/clothings" element={<Clothings addToCart={addToCart} />} />
          <Route path="/electronics" element={<Electronics addToCart={addToCart} />} />
          <Route path="/watches" element={<Watches addToCart={addToCart} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;