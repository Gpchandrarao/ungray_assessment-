import React, { useState } from "react";
import "../styles/Login.css";
import svg from "../assets/icon.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navegite = useNavigate();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    navegite("/");
  };

  const onchangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onchangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="login-container">
      <div className="heading-container">
        <img src={svg} alt="svg" className="logo-img" />
        <h1>Ungray</h1>
      </div>
      <form className="form-container" onSubmit={onSubmitForm}>
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          placeholder="username"
          className="input"
          value={username}
          onChange={onchangeUsername}
          required
        />
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          type="password"
          id="username"
          placeholder="password"
          className="input"
          required
          onChange={onchangePassword}
          value={password}
        />
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
