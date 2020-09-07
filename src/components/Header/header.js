import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

import Logo from "../../assets/logo.png";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Monti Logo"></img>
          </Link>
        </div>
        <div className="cta">
          <ul>
            <li>
              <Link to="/registration">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
