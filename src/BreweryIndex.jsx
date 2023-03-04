import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Dropdown } from "./Dropdown";
import { ImageSlider } from "./ImageSlider";

export function BreweryIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  const [tours, setTours] = useState([]);
  const [breweriesTours, setBreweriesTours] = useState([]);

  const handleUpdateIndexBrewery = (params) => {
    axios.post(`https://brewr-production.up.railway.app/breweries`, params).then((response) => {
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
    axios.get("https://brewr-production.up.railway.app/breweries").then((response) => {
      setBreweries(response.data);
      console.log(response.data, "test");
    });
  };

  const handleShowTours = () => {
    axios.get(`https://brewr-production.up.railway.app/tours.json`).then((response) => {
      setTours(response.data);
    });
  };

  const handleAddBreweryToTour = (params) => {
    axios.post(`https://brewr-production.up.railway.app/breweries_tours.json`, params).then((response) => {
      console.log(response.data);
      // setBreweriesTours(response.data);
    });
  };

  useEffect(handleIndexBrewery, []);
  useEffect(handleShowTours, []);
  useEffect(handleAddBreweryToTour, []);

  return (
    <div id="brewery-index">
      <div className="back-containter">
        <ImageSlider />
      </div>
      <div className="all-brew-containter">
        <div className="brew-inside-container">
          <div className="item1 search-breweries-h1">
            <h1>Search Breweries</h1>
          </div>
          <div className="item1 city-state-input">
            <form onSubmit={handeSubmit}>
              <label className="labels-search" for="city">
                City:
              </label>
              <input className="input-search" type="text" id="city" placeholder="Enter City" name="city" />
              <label className="labels-search" for="state">
                State:
              </label>
              <input className="input-search" type="text" id="state" name="state" placeholder="Enter State" />
              <input type="submit" value="Submit" className="submit styled-button search-btn input-search"></input>
            </form>
          </div>
          <div className="item1 item-search-filter">
            <span className="labels-search search">Filter:</span>
            <input
              className="input-search"
              type="text"
              value={searchFilter}
              placeholder="Filter"
              onChange={(event) => setSearchFilter(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="container">
        {breweries.length < 1 ? (
          <div className="sorry-background">
            <h2>Sorry! Your city is currently in the works! Make sure to check cities near you in the meantime!</h2>
          </div>
        ) : (
          breweries
            .filter((brewery) => brewery.name.toLowerCase().includes(searchFilter.toLowerCase()))
            .map((brewery) => (
              <div key={brewery.id} className="card">
                <div className="breweries">
                  <img src="/images/brewworldbreweryIndex.png" className="beerworld"></img>
                  <h2 className="brew-Title">{brewery.name}</h2>
                  <p>
                    {brewery.street}, {brewery.city}, {brewery.state}, {brewery.zip}{" "}
                  </p>
                  <p>{brewery.phone}</p>
                  <p>
                    <a href={`https://www.${brewery.url}`} target="_blank">
                      Website
                    </a>
                  </p>
                  <br></br>
                  <div className="App">
                    <Dropdown dropdownTours={tours} addBreweryTours={handleAddBreweryToTour} brewery={brewery} />
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
      <div className="empty-brew-div ">
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
