import React from "react";
import "./Navbar.css"
function Navbar() {
  return (
    <nav>
      <div className="logo">picture.com</div>
      <ul className="nav-link">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
      </ul>
      <div className="clear"></div>
    </nav>
  );
}

export default Navbar;
