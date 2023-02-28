import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://127.0.0.1:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="body" id="signup">
      <div className="display-signup">
        <div className="signup-content">
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="signup">
            <div className="signup-field">
              <i className="signup-icon fas fa-user">
                <img src="/images/teamfemale_119531.svg"></img>
              </i>
              <input name="name" type="text" placeholder="Name" className="signup-input" />
            </div>
            <div className="signup-field">
              <i className="signup-icon fas fa-user">
                <img src="/images/email.svg"></img>
              </i>
              <input name="email" type="email" placeholder="Email" className="signup-input" />
            </div>
            <div className="signup-field">
              <i className="signup-icon fas fa-user">
                <img src="/images/lock-svgrepo-com.svg"></img>
              </i>
              <input name="password" type="password" placeholder="Password" className="signup-input" />
            </div>
            <div className="signup-field">
              <i className="signup-icon fas fa-user">
                <img src="/images/lock-svgrepo-com.svg"></img>
              </i>
              <input
                name="password_confirmation"
                type="password"
                placeholder="Password Confirmation"
                className="signup-input"
              />
            </div>
            <button type="submit" className="signup-submit">
              Sign up
            </button>
          </form>
        </div>
        <div className="signup-screen-background">
          <span className="signup-screen-background-shape signup-screen-background-shape1"></span>
        </div>
      </div>
    </div>
  );
}
