import React from "react";
import "../styles/App.css";
import "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import {
  FaNode,
  FaJsSquare,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNpm,
} from "react-icons/fa";

function Resume() {
  return (
    <Container fluid>
      <Row className=" justify-content-center mt-5">
        <Card flex-wrap style={{ width: "30rem", height: "auto" }}>
          <Card.Body className="fs-2">
            {" "}
            <p className="text-center">
              <a href="https://docs.google.com/document/d/1tGYhJmhCegnEsTcD2KZQC3RlaWsVEcPYrirE9Oy93so/edit?usp=sharing">
                Resume
              </a>
            </p>
            <p className="text-center">
              <p>
                {" "}
                Technology experience with HTML, CSS, Node.js, Express.js,
                JQuery, Mongoose, MongoDB, Graphql, Javascript, React.
              </p>
              <FaNode />
              <FaJsSquare />
              <FaReact />
              <FaCss3Alt />
              <FaHtml5 />
              <FaNpm />
            </p>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Resume;
