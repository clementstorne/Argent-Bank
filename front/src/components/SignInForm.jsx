import "../main.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import AuthService from "../services/AuthService";

import { login } from "../store/features/loginSlice";

export default function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const credentials = {
      email: username,
      password,
    };

    AuthService.login(credentials)
      .then((res) => {
        AuthService.saveToken(res.data.body.token);
        dispatch(login(res.data));
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form id="sign-in-form" action="" onSubmit={handleLogin}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <input className="sign-in-button" type="submit" value="Sign In" />
      </form>
    </section>
  );
}
