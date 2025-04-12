import { useState } from "react";
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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                    ☰
                </button>
                <div className={`nav-links${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <div className="nav-item" key={link.to}>
                            <Link to={link.to} onClick={() => setIsOpen(false)}>{link.label}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
