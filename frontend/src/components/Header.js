import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <nav className="container main-nav">
        <h1 className="Logo">Statio</h1>
        <ul className="main-nav-list">
          <li>
            <Link className="main-nav-link">Contact</Link>
          </li>
          <li>
            <Link className="main-nav-link">All</Link>
          </li>
          <li>
            <Link className="main-nav-link">Login</Link>
          </li>
          <li>
            <Link className="main-nav-link nav-warning">Register</Link>
          </li>
        </ul>
      </nav>

      <div className="header-container">
        <div className="header-container-inner">
          <h1 className="header-title">Your school items here!</h1>
          <p className="header-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            sequi, error ut rerum, nobis aspernatur aliquam dicta magnam iste,
            fugit obcaecati voluptatem eos mollitia deserunt debitis ratione
            quos perferendis rem!
          </p>
          <Link to={"/"} className="header-btn">
            Start shopping!
          </Link>
        </div>
      </div>
    </header>
  );
}
