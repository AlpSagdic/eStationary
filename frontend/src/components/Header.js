import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Header(props) {
  const { setUserInfo } = useContext(UserContext);
  const myStyle = {
    display: props.display,
  };

  useEffect(() => {}, [props.name]);

  function logout() {
    axios
      .post("http://localhost:4000/logout", {}, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          setUserInfo(null);
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
              Items
            </Link>
          </li>
          {props.name && (
            <>
              <li>
                <Link to="/logout" className="main-nav-link" onClick={logout}>
                  Logout
                </Link>
              </li>
              <li>
                <Link to={"/cart"} className="main-nav-link nav-warning">
                  Cart
                </Link>
              </li>
            </>
          )}
          {!props.name && (
            <>
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
            </>
          )}
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
