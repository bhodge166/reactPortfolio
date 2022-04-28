import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
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
