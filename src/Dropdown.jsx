import "./Dropdown.css";
import React from "react";

export function Dropdown(props) {
  return (
    <label>
      Add to your tour:
      <select>
        <option value="" disabled selected>
          Select...
        </option>
        <option value="hurr"></option>
      </select>
    </label>
  );
}
