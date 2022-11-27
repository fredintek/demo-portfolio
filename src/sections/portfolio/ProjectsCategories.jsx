import React, { useState } from "react";
import CategoryBtn from "./CategoryBtn";

const ProjectsCategories = ({ categories, onFilterProject }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterProject(activeCat);
  };

  return (
    <div className="portfolio__categories">
      {categories.map((category) => (
        <CategoryBtn
          key={category}
          category={category}
          onChangeCategoryHandler={() => changeCategoryHandler(category)}
          className={`btn cat__btn ${
            activeCategory === category ? "primary" : "white"
          }`}
        />
      ))}
    </div>
  );
};

export default ProjectsCategories;
