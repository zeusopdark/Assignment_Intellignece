import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className={""}>
        <h2 className="nav-logo">
          <NavLink style={{ textDecoration: "none" }} to={"/"}>
            Recipes
          </NavLink>
        </h2>
        <ul className="nav-links">
          <>
            <li>
              <NavLink className="btn" to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="btn" to={"/login"}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="btn" to={"/register"}>
                Register
              </NavLink>
            </li>
          </>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
