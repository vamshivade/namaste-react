import React, { useEffect, useState } from "react";
import logo from "url:../assets/goodfood.png";
import { Link } from "react-router-dom";

import useOnline from "../utils/useOnline";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const isOnline = useOnline();

  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-bar">
        <ul className="nav-list">
          <li>Online Status : {isOnline ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
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
