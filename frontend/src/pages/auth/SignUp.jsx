import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/register", {
        username: username,
        password: password,
        email: email,
        phone: phone,
        city: city,
        country: country,
      })
      .then(() => {
        navigate("/login");
      });
  };

  return (
    <div className="SignUp">
      <div className="container">
        <div className="headerLogin">
          <h1 className="headerTitle">Register</h1>
        
        </div>
        <div className="lblDiv">
          <p>Username</p>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="lblDiv">
          <p>password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="lblDiv">
          <p>Email</p>
          <input
            className="inputPass"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="lblDiv">
          <p>Phone</p>
          <input
            className="inputPass"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="lblDiv">
          <p>City</p>
          <input
            className="inputPass"
            type="text"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="lblDiv">
          <p>Country</p>
          <input
            className="inputPass"
            type="text"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="btnClass">
          <button onClick={handleSubmit}>REGISTER</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
