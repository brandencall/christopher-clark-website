//* Navbar.tsx *//

import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

/**
 * Navbar links
 * IMPORTANT: These paths MUST match App.tsx routes exactly (lowercase).
 */
const navLinks = [
  { label: "Home", to: "/" },
  { label: "Background", to: "/background" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* NOTE: Keeping your existing open-class behavior so Navbar.css still matches */}
        <div className={`nav-links${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <div className="nav-item" key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"} // ensures Home only highlights on exact "/"
                onClick={() => setIsOpen(false)}
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#66ccff",
                        backgroundColor: "rgba(255,255,255,0.06)",
                      }
                    : undefined
                }
              >
                {link.label}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
