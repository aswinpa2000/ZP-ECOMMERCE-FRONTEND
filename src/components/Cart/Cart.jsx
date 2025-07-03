import "./Cart.css";

const Cart = ({ cartItems, onDelete }) => {
  const calculateTotal = () => {
    // remove $ symbol and convert to number
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return total + price;
    }, 0);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
                <button
                  className="delete-button"
                  onClick={() => onDelete(index)}
                >
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
