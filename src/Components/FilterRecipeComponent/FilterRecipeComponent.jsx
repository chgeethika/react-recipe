import React from 'react';
import './FilterRecipeComponent.css';

const FilterRecipeComponent = ({ onFilter }) => {
  const handleFilterChange = (event) => {
    onFilter(event.target.value);
  };

  return (
    <div className="filter-container">
      <select onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
    </div>
  );
};

export default FilterRecipeComponent;
