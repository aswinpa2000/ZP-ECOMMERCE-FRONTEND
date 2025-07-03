import "./NewCollections.css";

const NewCollections = () => {
  return (
    <>
    <p className="heading">CATEGORY</p>
    <div className="image-grid">
        
          <div className="image-card">
            <img src="https://www.shutterstock.com/image-illustration/group-home-appliances-consumer-electronics-600nw-2451385301.jpg" alt="Men's fashion" />
            <div className="image-caption">ELECTRONICS</div>
          </div>
          <div className="image-card">
            <img src="https://www.shutterstock.com/image-photo/gold-fashionable-elegant-watch-classic-260nw-2477327319.jpg" alt="Women's fashion" />
            <div className="image-caption">WATCHES</div>
          </div>
          <div className="image-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6rHC9MY-Rw4WHQQRvZ8JozA7o665CZE4nxw&s" alt="Kids fashion" />
            <div className="image-caption">CLOTHINGS</div>
          </div>
        </div>
        </>
  );
};

export default NewCollections;
