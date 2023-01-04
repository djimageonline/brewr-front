import axios from "axios";
import { useState, useEffect } from "react";

export function TourIndex() {
  const [tours, setTours] = useState([]);

  const handleShowTour = () => {
    axios.get(`http://localhost:3000/tours.json`).then((response) => {
      console.log(response.data);
      setTours(response.data);
    });
  };

  useEffect(handleShowTour, []);

  return (
    <div>
      <h1>Your Tours:</h1>
      {tours.map((tour) => (
        <div key={tour.id} className="tours">
          <h2>
            {tour.name} <button>More Info</button>
          </h2>
        </div>
      ))}
    </div>
  );
}
