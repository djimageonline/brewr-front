import "./Dropdown.css";
import React from "react";
import { useState, useEffect } from "react";

export function Dropdown(props) {
  const [tours, setTours] = useState([]);
  return (
    <div>
      <label>
        Add to your tour:
        <select>
          {/* {tours.map((tour) => (
            <div key={tour.id} className="tours">
              <h2>
                {tour.name}
                
              </h2>
            </div>
          ))} */}
          <option value="" disabled selected>
            Select...
          </option>
          {props.dropdownTours.map((tour) => (
            <option value="hurr">{tour.name}</option>
          ))}
          ;
        </select>
      </label>
      <form action="">
        <button>Add Brewery</button>
      </form>
    </div>
  );
}
