import React from "react";
import { NavLink } from "react-router-dom";
import "./18.NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
     
      <div className="logo">Group I</div>

      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="ProductDetails" activeClassName="active">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/BlogPost" activeClassName="active">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        
        
      </ul>
    </nav>
  );
};

export default NavBar;
