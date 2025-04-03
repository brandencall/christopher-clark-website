import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-container">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Background">Background</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Skills">Skills</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
        </div>
    </nav>
  );
};

export default Navbar;
