import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-group left">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/Background" onClick={closeMenu}>Background</Link></li>
        </ul>

        <ul className="nav-group center">
          <li><Link to="/Projects" onClick={closeMenu}>Projects</Link></li>
        </ul>

        <ul className="nav-group right">
          <li><Link to="/Skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link to="/Contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
