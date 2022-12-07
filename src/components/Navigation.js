import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/App.css";
function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="secondary" expand="md" className="p-4">
      <Container fluid>
        <Navbar.Brand className="text-light">Anthony Slaviero</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-between">
            <Nav.Link
              href="#about"
              className="text-light"
              onClick={() => handlePageChange("About")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="text-light"
              onClick={() => handlePageChange("Contact")}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className="text-light"
              onClick={() => handlePageChange("Portfolio")}
            >
              Portfolio
            </Nav.Link>

            <Nav.Link
              href="#resume"
              className="text-light"
              onClick={() => handlePageChange("Resume")}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
