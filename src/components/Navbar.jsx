import React from "react";
import logo from "../assets/logo.png";
const Navbar = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <nav>
      <div className="brand">
        <img src={logo} alt="logo" />
        <h3>MOEMEN</h3>
      </div>
      <div className="navLinks">
        <div
          className="navLink"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Home
        </div>
        <div
          className="navLink"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          About
        </div>
        <div
          className="navLink"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Services
        </div>
        <div
          className="navLink"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Projects
        </div>
        <div
          className="navLink"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Contact
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
