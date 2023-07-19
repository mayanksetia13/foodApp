import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">khaanPaan</h1>
      <ul className="navbar-list">
        <li className="navbar-list--item">
          <i class="fa-sharp fa-solid fa-bag-shopping"></i> Instamart
        </li>
        <li className="navbar-list--item">
          <i class="fa-solid fa-address-book"></i> Contact
        </li>
        <li className="navbar-list--item">
          <i class="fa-solid fa-cart-shopping"></i> Cart
        </li>
      </ul>
    </nav>
  );
}

export default Header;
