import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function register(ev) {
    ev.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        {
          name: name,
          email: email,
          password: password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setRedirect(true);
      } else {
        console.log(response);
      }
    } catch (err) {
      console.error("Registration delayed!", err);
    }
  }

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header title={"Start journey here!"} display="none" />
      <section className="section-form">
        <div className="container">
          <div className="form">
            <div className="form-text-box">
              <h2 className="heading-primary" style={{ color: "#fff" }}>
                Register
              </h2>
              <form action="post" className="form-form" onSubmit={register}>
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
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="me@example.com"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
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
                <button className="btn btn--form">Sign Up Now</button>
              </form>
            </div>
            <div
              className="register-img-box"
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
