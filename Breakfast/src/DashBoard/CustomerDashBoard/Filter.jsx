import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Filter.css"; // We'll create this CSS file

const Filter = ({ ee }) => {
  const [activeFilter, setActiveFilter] = useState(null);
  
  const HandleFilter = async (items) => {
    setActiveFilter(items);
    ee(items);
  };

  const filterOptions = [
    "Continental", "English", "Indian", "American", 
    "Japanese", "Mediterranean", "French", "Healthy"
  ];

  return (
    <div className="filter-container">
      <h2 className="filter-title">Filter Breakfast Options</h2>
      <div className="filter-buttons">
        {filterOptions.map((option) => (
          <Button
            key={option}
            onClick={() => HandleFilter(option)}
            className={`filter-btn ${activeFilter === option ? 'active' : ''}`}
            variant="outline-primary"
          >
            {option} Breakfast
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Filter;