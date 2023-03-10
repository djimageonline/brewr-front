import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("https://brewr-production.up.railway.app/sessions", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  const autoLogin = (val) => {
    document.getElementById("email").value = "guest@guest.com";
    document.getElementById("password").value = "password";
    // let autoLogin = document.getElementById("auto-login");
    // autoLogin.onSubmit = handleSubmit();
  };

  return (
    <div className="body" id="login">
      <div className="display-login">
        <div className="login-content">
          <ul>
            {errors.map((error) => (
              <li className="li-error" key={error}>
                {error}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="login" id="auto-login">
            <div className="login-field">
              <i className="login-icon fas fa-user">
                <img src="/images/email.svg"></img>
              </i>
              <input id="email" name="email" type="email" placeholder="Email" className="login-input" />
            </div>
            <div className="login-field">
              <i className="login-icon fas fa-lock">
                <img src="/images/lock-svgrepo-com.svg"></img>
              </i>
              <input id="password" name="password" type="password" placeholder="Password" className="login-input" />
            </div>
            <button type="submit" className="login-submit">
              Log in
            </button>
            <input className="login-submit" id="add" type="button" onClick={autoLogin} value="Guest" />
            <p className="note">* Guest: Click Guest. Then Click Log In.</p>
          </form>
        </div>
        <div className="log-screen-background">
          <span className="log-screen-background-shape log-screen-background-shape1"></span>
        </div>
      </div>
    </div>
  );
}
