import React from "react";
import { v4 as uuidv4 } from "uuid";

function CategoryFilter({ categories }) {
  const renderButtons = () => {
    return categories.map(category => {
      return <button key={uuidv4()}>{category}</button>
    })
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButtons()}
    </div>
  );
}

export default CategoryFilter;
