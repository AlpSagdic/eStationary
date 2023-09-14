import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        { name: name, password: password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const userInfo = response.data;
        setUserInfo(userInfo);
        setRedirect(true);
      } else {
        console.log(response);
      }
    } catch (err) {
      console.error("Login delayed!", err);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <Header
        title={"Resume Journey Here!"}
        display="none"
        content={
          "If you haven't registered yet, sign up now to benefit from the discounts! If you are registered, scroll down and log in to your account."
        }
      />
      <section className="section-form">
        <div className="container">
          <div className="form">
            <div className="form-text-box">
              <h2 className="heading-primary" style={{ color: "#fff" }}>
                Login
              </h2>
              <form action="post" className="form-form" onSubmit={login}>
                <div>
                  <label htmlFor="full-name">Full Name</label>
                  <input
                    type="text"
                    id="full-name"
                    placeholder="Alp Eren"
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                  />
                </div>
                <button className="btn btn--form">Let me In!</button>
              </form>
            </div>
            <div
              className="login-img-box"
              role="img"
              aria-label="Register image"
            ></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
