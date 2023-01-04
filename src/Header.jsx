import "./Header.css";

export function Header() {
  return (
    <header>
      <div className="nav">
        <div className="logo">
          <h1>BrewR</h1>
        </div>
        <div className="nav-menu">
          <a href="/home">
            <img src="/images/home-house-building-svgrepo-com.svg" alt="HOME" />
            <span> HOME</span>
          </a>
          <a href="/Search">
            <img src="/images/beer-svgrepo-com.svg" alt="SEARCH" />
            <span>SEARCH BREWERY</span>
          </a>
          <a href="/">
            <img src="/images/pedestrian-walk-svgrepo-com.svg" alt="WATCHLIST" />
            <span> TOURS</span>
          </a>
        </div>
      </div>
    </header>
  );
}
