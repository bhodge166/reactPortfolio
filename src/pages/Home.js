import React from "react";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <Welcome />
      <AboutMe />
      <Portfolio />
      <Skills />
    </div>
  );
};

export default Home;
