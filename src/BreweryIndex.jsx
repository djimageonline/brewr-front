import "./BreweryIndex.css";
import { useState } from "react";

export function BreweryIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="brewery-index">
      <h1>All Breweries</h1>

      <div className="search">
        <div className="location">
          <form method="POST" action="/foo-route">
            <label for="cname">City: </label>
            <input type="text" id="cname" name="cname" />
            <br></br>
            <label for="sname">State:</label>
            <input type="text" id="sname" name="sname" />
            <br></br>
            <input type="submit" value="Submit" className="submit"></input>
          </form>
        </div>
        Search filter:
        <input
          className=""
          type="text"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
        />
      </div>
      <div className="container">
        {props.breweries
          .filter((brewery) => brewery.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((brewery) => (
            <div className="card">
              <div key={brewery.id} className="breweries">
                <h2>{brewery.name}</h2>
                <p>
                  Address: {brewery.street}, {brewery.city}, {brewery.state}, {brewery.zip}{" "}
                </p>
                <p>
                  <a href={`https://www.${brewery.url}`}>Website</a>
                </p>
                <br></br>
                <button onClick={() => props.onSelectBrewery(brewery)}>More Info</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
