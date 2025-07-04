import "./Cart.css";

const Cart = ({ cartItems, onDelete }) => {
  // Robustly extract the array of items
  let itemsArray = [];

  if (Array.isArray(cartItems)) {
    itemsArray = cartItems;
  } else if (cartItems && typeof cartItems === "object") {
    // Try to find the first array property (e.g., cart, items, data)
    for (const key in cartItems) {
      if (Array.isArray(cartItems[key])) {
        itemsArray = cartItems[key];
        break;
      }
    }
  }

  const calculateTotal = () =>
    itemsArray.reduce((total, item) => total + (item.product_price || 0), 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {/* Debug: Show the incoming data structure */}
      {/* <pre>{JSON.stringify(cartItems, null, 2)}</pre> */}
      {itemsArray.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {itemsArray.map((item, index) => (
              <div className="cart-item" key={item._id || index}>
                <img src={item.product_image} alt={item.product_name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.product_name}</h3>
                  <p>₹{item.product_price}</p>
                </div>
                <button onClick={() => onDelete(item)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ₹{calculateTotal().toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;