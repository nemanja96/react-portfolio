import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const hangleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="images/logo.png" />
          </Link>
          <div className="menu-icon" onClick={hangleClick}>
            <img src={click ? "images/close.png" : "images/hamburger.png"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/works" className="nav-links" onClick={closeMobileMenu}>
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
