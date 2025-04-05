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
        <div className="menu-toggle" onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/Background" onClick={closeMenu}>Background</Link></li>
          <li><Link to="/Projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/Skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link to="/Contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
