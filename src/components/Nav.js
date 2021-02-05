import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const activeStyle = { backgroundColor: "#1BA7CD", color: "white" };
  return (
    <nav>
      <div className="logo">
        <NavLink to="/">
          <h3>DRNK</h3>
        </NavLink>
      </div>
      <ul className="nav-links">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/products" activeStyle={activeStyle}>
          <li>Products</li>
        </NavLink>
        <NavLink activeStyle={activeStyle} to="/about">
          <li>About</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
