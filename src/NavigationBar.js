// NavigationBar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css"; // Import your CSS file

const NavigationBar = ({ selectedOption }) => {
  return (
    <div className="navigation-bar">
      <div className="options-list">
      <NavLink
        to="/optionA"
        className={`nav-link ${selectedOption === "Option A" ? "opt-selected" : ""}`}
        activeClassName="active" 
      >
        Option A
      </NavLink>
      <br />
      <NavLink
        to="/optionB"
        className={`nav-link ${selectedOption === "Option B" ? "opt-selected" : ""}`}
        activeClassName="active" 
      >
        Option B
      </NavLink>
      </div>
    </div>
  );
};

export default NavigationBar;