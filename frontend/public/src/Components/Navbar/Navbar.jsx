import React, { useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Assets (make sure these exist in ../Assets/)
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import navDropdown from "../Assets/nav_dropdown.png";

// Context
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>

      {/* Dropdown Icon */}
      <img
        className="nav-dropdown"
        onClick={dropdownToggle}
        src={navDropdown}
        alt="Dropdown"
      />

      {/* Menu Links */}
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="./">
            Shop
          </Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: "none" }} to="./mens">
            Men
          </Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: "none" }} to="./womens">
            Women
          </Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none" }} to="./kids">
            Kids
          </Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      {/* Cart & Login */}
      <div className="nav-logic-cart">
        <Link to="./login">
          <button>Login</button>
        </Link>
        <Link to="./cart">
          <img src={cartIcon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
