import { Link } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Background", to: "/Background" },
  { label: "Projects", to: "/Projects" },
  { label: "Skills", to: "/Skills" },
  { label: "Contact", to: "/Contact" },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container container">
        {navLinks.map((link) => (
          <div className="nav-item" key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
