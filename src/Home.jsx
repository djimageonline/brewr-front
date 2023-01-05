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

  const handleUpdateIndexBrewery = (params) => {
    axios.post(`http://localhost:3000/breweries`, params).then((response) => {
      console.log(response.data);
      setBreweries(response.data);
    });
  };

  useEffect(handleIndexBrewery, []);

  return (
    <div>
      <br></br>
      <br></br>
      <BreweryIndex
        breweries={breweries}
        onSelectBrewery={handleIndexBrewery}
        onUpdateIndexBrewery={handleUpdateIndexBrewery}
      />
    </div>
  );
}
