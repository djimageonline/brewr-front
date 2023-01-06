import "./Dropdown.css";
import React from "react";

export function Dropdown(props) {
  return (
    <div>
      <label>
        Add to your tour:
        <select>
          <option value="" disabled selected>
            Select...
          </option>
          <option value="hurr">{props.dropdownTours[0].name}</option>
        </select>
      </label>
      <form action="">
        <button>Add Brewery</button>
      </form>
    </div>
  );
}
