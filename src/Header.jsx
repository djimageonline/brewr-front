import "./Header.css";
import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="nav">
        <div className="logo">
          <h3>BrewR</h3>
        </div>
        <div className="nav-menu">
          <Link to="/">
            <img src="/images/home-house-building-svgrepo-com.svg" alt="HOME" />
            <span> HOME</span>
          </Link>

          <Link to="/brewery/index">
            <img src="/images/beer-svgrepo-com.svg" alt="SEARCH" />
            <span>SEARCH BREWERY</span>
          </Link>

          <Link to="/tours/index">
            <img src="/images/pedestrian-walk-svgrepo-com.svg" alt="WATCHLIST" />
            <span> TOURS</span>
          </Link>
          {localStorage.jwt === undefined ? (
            <>
              <Link to="/signup">
                <img src="/images/user-svgrepo-com.svg" alt="HOME" />
                <span>SIGNUP</span>
              </Link>
              <Link to="/login">
                <img src="/images/login-svgrepo-com.svg" alt="HOME" />
                <span>LOGIN</span>
              </Link>
            </>
          ) : (
            <LogoutLink />
          )}
        </div>
      </div>
    </header>
  );
}
