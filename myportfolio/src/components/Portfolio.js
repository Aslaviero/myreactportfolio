import React from "react";
import "../styles/App.css";
import "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import Col from "react-bootstrap/Col";

function Portfolio() {
  return (
    <Container fluid="lg" className="align-items-center">
      <h2 className="text-light text-center text-decoration-underline">
        {" "}
        My Projects
      </h2>
      <Row className="justify-content-center">
        <Col>
          <Card style={{ width: "20rem", height: "25rem" }} className=" mt-4">
            <Card.Img
              style={{ width: "20rem", height: "25rem" }}
              src="pokedittobase.jpeg"
              alt="link to pokedittobase Website"
              className="img"
            />
            <Card.Body>
              <Card.Title className="text-center">Pokedittobase</Card.Title>
              <Card.Text>
                <p>
                  A full stack app that you can create an account on to track
                  what pokemon you have caught and share with your friends who
                  also have accounts.
                </p>
                <p className="text-center fs-4">
                  <a href="https://pokedittobase.herokuapp.com/login">
                    <FaExternalLinkAlt />
                  </a>
                  <a href="https://github.com/marionsy/poke-dittobase">
                    <FaGithub />
                  </a>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: "20rem", height: "25rem" }}
            className="shadow-lg mt-4"
          >
            <Card.Img
              style={{ width: "20rem", height: "15rem" }}
              variant="top"
              src="foodyscreenshot.jpeg"
              alt="screenshot of foody website"
              className="img"
            />
            <Card.Body>
              <Card.Title className="text-center">Foody</Card.Title>
              <Card.Text>
                <p className="fs-9">
                  A site to help you create simple and healthy meals with
                  instructions for prep and photos of the finished meal!
                </p>
                <p className="text-center fs-4">
                  <a href="https://aslaviero.github.io/FoodyV2/">
                    <FaExternalLinkAlt />
                  </a>
                  <a href="https://github.com/Aslaviero/FoodyV2">
                    <FaGithub />
                  </a>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
{
  /* <Col>
          <Card
            style={{ width: "20rem", height: "25rem" }}
            className="shadow-lg mt-4"
          >
            <Card.Img
              style={{ width: "20rem", height: "25rem" }}
              variant="top"
              src="foodyscreenshot.jpeg"
              alt="screenshot of foody website"
              className="img"
            />
            <Card.Body>
              <Card.Title className="text-center">Poke Ditto Base</Card.Title>
              <Card.Text>
                <p>
                  A full stack app that you can create an account on to track
                  what pokemon you have caught and share with your friends who
                  also have accounts.
                </p>
                <a href="https://pokedittobase.herokuapp.com/login">
                  Pokedittobase live site
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col> */
}
