import React from "react";
import "../styles/App.css";
import "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <Container fluid>
      <h2 className="text-center text-decoration-underline text-light">
        How to Contact Me
      </h2>
      <Row className=" justify-content-center">
        <Card flex-wrap style={{ width: "35rem", height: "auto" }}>
          <Card.Body className="fs-2">
            {" "}
            <p className="text-center">
              <a href="mailto:tonyslaviero@gmail.com">Tonyslaviero@gmail.com</a>
            </p>
            <p className="text-center">or</p>
            <p className="text-center">
              <a href="https://www.linkedin.com/in/anthony-slaviero-16ab05153/">
                Linkedin
              </a>
            </p>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Contact;
