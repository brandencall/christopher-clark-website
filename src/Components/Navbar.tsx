import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-item"><Link to="/">Home</Link></div>
        <div className="nav-item"><Link to="/Background">Background</Link></div>
        <div className="nav-item"><Link to="/Projects">Projects</Link></div>
        <div className="nav-item"><Link to="/Skills">Skills</Link></div>
        <div className="nav-item"><Link to="/Contact">Contact</Link></div>
      </div>
    </nav>
  );
}

export default Navbar;