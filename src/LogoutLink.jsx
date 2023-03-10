import axios from "axios";
import "./index.css";

export function LogoutLink(props) {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div className="logout">
      <a href="#" onClick={handleClick}>
        <img src="/images/exit-logout-svgrepo-com.svg" alt="HOME" />
        <span className="span-link" onClick={props.handelNavClose}>
          LOGOUT
        </span>
      </a>
    </div>
  );
}
