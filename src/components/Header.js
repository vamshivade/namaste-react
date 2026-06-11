import React, { useEffect, useState, useContext } from "react";
import logo from "url:../assets/goodfood.png";
import { NavLink } from "react-router-dom";
import useOnline from "../utils/useOnline";

import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const isOnline = useOnline();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  // console.log(cartItems.length);

  const getActiveLink = ({ isActive }) =>
    isActive ? "font-bold text-orange-500" : "";

  return (
    <div className="header">
      <NavLink className="logo-container cursor-pointer" to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      <div className="nav-bar">
        <ul className="nav-list">
          <li>User: {loggedInUser}</li>
          <li>Online Status : {isOnline ? "🟢" : "🔴"}</li>
          <li>
            <NavLink to={"/"} className={getActiveLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className={getActiveLink}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className={getActiveLink}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to={"/cart"} className={getActiveLink}>
              Cart ({cartItems.length} items)
            </NavLink>
          </li>
          <li>
            <NavLink to={"/faq"} className={getActiveLink}>
              FAQ
            </NavLink>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              if (btnName === "Login") {
                setBtnName("Logout");
              } else {
                setBtnName("Login");
              }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
