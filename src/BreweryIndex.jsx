import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";

export function BreweryIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  const handleUpdateIndexBrewery = (params) => {
    axios.post(`http://localhost:3000/breweries`, params).then((response) => {
      console.log(response.data);
      setBreweries(response.data);
    });
  };

  const handeSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleUpdateIndexBrewery(params);
  };

  const [breweries, setBreweries] = useState([]);

  const handleIndexBrewery = () => {
    axios.get("http://localhost:3000/breweries").then((response) => {
      console.log(response.data);
      setBreweries(response.data);
    });
  };

  useEffect(handleIndexBrewery, []);

  return (
    <div id="brewery-index">
      <h1>All Breweries</h1>

      <div className="search">
        <div className="location">
          <form onSubmit={handeSubmit}>
            <label for="city">City: </label>
            <input type="text" id="city" name="city" />
            <br></br>
            <label for="state">State:</label>
            <input type="text" id="state" name="state" />
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
        {breweries
          .filter((brewery) => brewery.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((brewery) => (
            <div className="card">
              <div key={brewery.id} className="breweries">
                <h2>{brewery.name}</h2>
                <p>
                  Address: {brewery.street}, {brewery.city}, {brewery.state}, {brewery.zip}{" "}
                </p>
                <p>{brewery.phone}</p>
                <p>
                  <a href={`https://www.${brewery.url}`}>Website</a>
                </p>
                <br></br>
                <button onClick={() => handleIndexBrewery(brewery)}>More Info</button>
              </div>
            </div>
          ))}
        {/* <BreweryIndex
        breweries={breweries}
        onSelectBrewery={handleIndexBrewery}
        onUpdateIndexBrewery={handleUpdateIndexBrewery}
      /> */}
      </div>
    </div>
  );
}
