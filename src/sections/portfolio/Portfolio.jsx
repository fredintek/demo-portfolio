import React, { useState } from "react";
import "./Portfolio.css";
import ProjectsCategories from "./ProjectsCategories";
import Projects from "./Projects";
import data from "./data";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];
  // console.log(uniqueCategories);

  const filterProjectsHandler = (category) => {
    if (category === "all") {
      setProjects(data);
      return;
    }
    const filteredProjects = data.filter((item) => item.category === category);
    setProjects(filteredProjects);
  };

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on for my clients. Use
        the buttons to toggle the different categories
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProject={filterProjectsHandler}
        />
        <Projects data={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
