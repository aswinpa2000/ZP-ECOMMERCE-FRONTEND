import './Heropage.css';

const Heropage = ({ prod, addToCart }) => {
  return (
    <div className="product-container">
      {prod.map((item) => (
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

export default Heropage;
