import "./Cart.css";

const Cart = ({ cartItems, onDelete }) => {
  const itemsArray = Array.isArray(cartItems) ? cartItems : [];

  const calculateTotal = () =>
    itemsArray.reduce((total, item) => total + (item.product_price || item.price || 0), 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {itemsArray.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {itemsArray.map((item, index) => (
              <div className="cart-item" key={item.id || index}>
                <img
                  src={item.image || item.product_image}
                  alt={item.name || item.product_name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name || item.product_name}</h3>
                  <p>₹{item.price || item.product_price}</p>
                </div>
                <button className="delete-btn" onClick={() => onDelete(item)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ₹{calculateTotal().toFixed(2)}</h3>
          </div>
          <div className="checkout-btn">
            <p>Checkout</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
