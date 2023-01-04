import axios from "axios";
import { useState, useEffect } from "react";
import { BreweryIndex } from "./BreweryIndex";

export function Home() {
  const [breweries, setBreweries] = useState([]);
  const handleIndexBrewery = () => {
    axios.get("http://localhost:3000/breweries").then((response) => {
      console.log(response.data);
      setBreweries(response.data);
    });
  };

  useEffect(handleIndexBrewery, []);
  return (
    <div>
      <h1>Welcome to React!</h1>

      <BreweryIndex breweries={breweries} onSelectBrewery={handleIndexBrewery} />
    </div>
  );
}
