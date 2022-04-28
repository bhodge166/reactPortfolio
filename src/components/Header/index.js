import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Routes } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="App container py-3">
        <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
          <LinkContainer to="/">
            <Navbar.Brand className="font-weight-bold text-muted">
              Brad Hodge
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav activeKey={window.location.pathname}>
              <LinkContainer to="/">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/portfolio">
                <Nav.Link>Portfolio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/resume">
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
