import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const myStyle = {
    display: props.display,
  };
  return (
    <header>
      <nav className="container main-nav">
        <Link to={"/"} className="logo">
          <h1>Statio</h1>
        </Link>
        <ul className="main-nav-list">
          <li>
            <Link to={"/contact"} className="main-nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link className="main-nav-link" to={"/all"}>
              All
            </Link>
          </li>
          <li>
            <Link className="main-nav-link" to={"/login"}>
              Login
            </Link>
          </li>
          <li>
            <Link className="main-nav-link nav-warning" to={"/register"}>
              Register
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container hero">
        <div className="header-container-inner">
          <h1 className="header-title">{props.title}</h1>
          <p className="header-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            sequi!
          </p>
          <Link to={"/"} className="header-btn" style={myStyle}>
            Start shopping!
          </Link>
        </div>
      </div>
    </header>
  );
}
