import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Routes } from "react-router-dom";

const styles = {
  header: {
    background: "#555b6e",
  },
  text: {
    color: "#FAF9F9",
  },
};

const Header = () => {
  return (
    <header>
      <div className="App">
        <Navbar
          collapseOnSelect
          style={styles.header}
          expand="md"
          className="mb-3 px-3"
        >
          <LinkContainer style={styles.text} to="/">
            <Navbar.Brand className="font-weight-bold">Brad Hodge</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav activeKey={window.location.pathname}>
              <LinkContainer style={styles.text} to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer style={styles.text} to="/portfolio">
                <Nav.Link>Portfolio</Nav.Link>
              </LinkContainer>
              <LinkContainer style={styles.text} to="/resume">
                <Nav.Link>Resume</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    </header>
  );
};

export default Header;
