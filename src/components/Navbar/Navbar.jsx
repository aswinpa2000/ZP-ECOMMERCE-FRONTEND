import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="brand">GRABIT</Link>
      </div>
      <div className="navbar-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/clothings" className="nav-link">Clothing</Link>
        <Link to="/watches" className="nav-link">Watches</Link>
        <Link to="/electronics" className="nav-link">Electronics</Link>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Sign-Up</Link>
        <Link to="/cart" className="nav-link" title="Cart">🛒({cartCount})</Link>

      </div>
    </nav>
  );
};

export default Navbar;
