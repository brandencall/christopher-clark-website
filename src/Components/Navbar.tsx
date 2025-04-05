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
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Background">Background</Link></li>
    </ul>

    <ul className="nav-group center">
      <li><Link to="/Projects">Projects</Link></li>
    </ul>

    <ul className="nav-group right">
      <li><Link to="/Skills">Skills</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
    </ul>
  </div>
</nav>