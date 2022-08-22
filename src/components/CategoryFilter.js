import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const renderButtons = categories.map((category) => {
      const className = category === selectedCategory ? "selected" : null
      return (
        <button 
          className={className} 
          onClick={() => onSelectCategory(category)} 
          key={category}>
            {category}
        </button>
      )
    })
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButtons}
    </div>
  );
}

export default CategoryFilter;