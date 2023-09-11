import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();
  return (
    <footer className="footer">
      <div>
        <ul className="social-list">
          <li>
            <Link
              className="social-icon"
              to={"https://www.instagram.com/reak.tech/"}
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
          </li>
          <li>
            <Link className="social-icon" to={"https://twitter.com/ReakTech"}>
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
          </li>
          <li>
            <Link className="social-icon" to={"https://discord.gg/D3fyJMYcqg"}>
              <ion-icon name="logo-discord"></ion-icon>
            </Link>
          </li>
          <li>
            <a className="social-icon" href="mailto:contact@reaktech.com">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </li>
        </ul>
        <ul className="title-list">
          <li className="footer-title">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="footer-title">
            <a href="mailto:contact@reaktech.com">Contact</a>
          </li>
          <li className="footer-title">
            <Link to={"/items"}>Items</Link>
          </li>
          <li className="footer-title">
            <Link to={"/login"}>Login</Link>
          </li>
          <li className="footer-title">
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
        <p className="footer-text">
          Copyright &copy; {currentYear} by ReakTech
        </p>
      </div>
    </footer>
  );
}
