import React from "react";

const CategoryBtn = ({ category, className, onChangeCategoryHandler }) => {
  return (
    <button
      onClick={() => onChangeCategoryHandler(category)}
      className={className}
    >
      {category}
    </button>
  );
};

export default CategoryBtn;
