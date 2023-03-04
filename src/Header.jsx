import "./Header.css";
import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function Header() {
  const navToggleClick = () => {
    document.body.classList.toggle("nav-open");
  };

  const handelNavClose = () => {
    document.body.classList.remove("nav-open");
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <h3>BrewR</h3>
        </div>

        <button
          // type="submit"
          onClick={navToggleClick}
          className="nav-toggle"
          id="toggle"
          aria-label="toggle navigation"
        >
          <span className="hamburger"></span>
        </button>

        <nav className="nav">
          <div className="menu-list">
            <Link to="/">
              <img src="/images/home-house-building-svgrepo-com.svg" alt="HOME" />
              <span className="span-link" onClick={handelNavClose}>
                {" "}
                HOME
              </span>
            </Link>

            <Link to="/tours/index">
              <img src="/images/pedestrian-walk-svgrepo-com.svg" alt="WATCHLIST" />
              <span className="span-link" onClick={handelNavClose}>
                {" "}
                TOURS
              </span>
            </Link>

            <Link to="/brewery/index">
              <img src="/images/beer-svgrepo-com.svg" alt="SEARCH" />
              <span className="span-link" onClick={handelNavClose}>
                SEARCH BREWERY
              </span>
            </Link>

            {localStorage.jwt === undefined ? (
              <>
                <Link to="/signup">
                  <img src="/images/user-svgrepo-com.svg" alt="HOME" />
                  <span className="span-link" onClick={handelNavClose}>
                    SIGNUP
                  </span>
                </Link>
                <Link to="/login">
                  <img src="/images/login-svgrepo-com.svg" alt="HOME" />
                  <span className="span-link" onClick={handelNavClose}>
                    LOGIN
                  </span>
                </Link>
              </>
            ) : (
              <LogoutLink />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
