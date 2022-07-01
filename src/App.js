import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import AboutMe from "./pages/AboutMe";

const styles = {
  bg: {
    background: "#BEE3DB",
  },
  spacing: {
    marginTop: "4rem",
  },
};

function App() {
  return (
    <Router>
      <div
        className="flex-column justify-flex-start min-100-vh"
        style={styles.bg}
      >
        <Header />
        <div className="container" style={styles.spacing}>
          <Routes>
            <Route path="/hodgePortfolio" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Skills />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
