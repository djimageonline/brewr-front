import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
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
      <div className="signup">
        <h2>Signup</h2>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="textbox">
            <input name="name" type="text" placeholder="Name" />
          </div>
          <div className="textbox">
            <input name="email" type="email" placeholder="Email" />
          </div>
          <div className="textbox">
            <input name="password" type="password" placeholder="Passwrod" />
          </div>
          <div className="textbox">
            <input name="password_confirmation" type="password" placeholder="Password Confirmation" />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}
