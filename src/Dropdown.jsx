import "./Dropdown.css";
import React from "react";
// import { useState, useEffect } from "react";

export function Dropdown(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.addBreweryTours(params);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="brewery" value={props.brewery.id}></input>

        {/* TEST */}
        <input type="hidden" name="name" value={props.brewery.name}></input>
        <input type="hidden" name="street" value={props.brewery.street}></input>
        <input type="hidden" name="city" value={props.brewery.city}></input>
        <input type="hidden" name="state" value={props.brewery.state}></input>
        <input type="hidden" name="zip" value={props.brewery.zip}></input>
        <input type="hidden" name="url" value={props.brewery.url}></input>

        <label>
          Select Tour:
          <select name="tour">
            <option value="" disabled selected>
              Select...
            </option>
            {props.dropdownTours.map((tour) => (
              <option key={tour.id} value={tour.id}>
                {tour.name}
              </option>
            ))}
            ;
          </select>
        </label>

        <button className="styled-button add-brewery-btn">Add Brewery</button>
      </form>
    </div>
  );
}
