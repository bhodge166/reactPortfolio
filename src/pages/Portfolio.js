import React from "react";
import projects from "../utils/projects";
import Cards from "../components/Cards";

const Portfolio = () => {
  return <Cards projects={projects} />;
};

export default Portfolio;
