import React from "react";
import "../styles/App.css";
import "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
function About() {
  return (
    <Container fluid>
      <h2 className="text-center text-decoration-underline text-light">
        About Me
      </h2>
      <Row className=" justify-content-center">
        <Card flex-wrap style={{ width: "90rem", height: "auto" }}>
          <Card.Body className="fs-2">
            {" "}
            <Image
              style={{ width: "10rem", height: "10rem" }}
              src="selfie.jpeg"
              alt=" Anthony Slaviero Selfie"
              className="rounded-circle mt-3 img-fluid"
            />
            <p>
            Hey, my name is Anthony Slaviero. I am Full-Stack Developer based in
            Phx, Arizona. Before starting my journey in Web Development I did
            in-person and online sales, Data Entry, Money management, Book
            keeping, and so much more. Ever since I was a child and used my first
            computer I have been interested in knowing everything about them. 
            Now I am learning to do that myself and looking forward to building
            many websites, apps, and platforms in the future. When I am not coding
            or studying I can be found either hiking, cooking, reading, or playing
            video games.</p>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default About;
