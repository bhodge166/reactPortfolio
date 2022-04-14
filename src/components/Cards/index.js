import React from "react";
import { Card, Container, Row } from "react-bootstrap";

const Cards = ({ projects }) => {
  return (
    <main>
      <h2>Projects</h2>
      <Container>
        <Row>
          {projects.map((project) => (
            <Card className="m-2" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={project.img} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.text}</Card.Text>
                <Card.Link href={project.deployed}>Visit Site</Card.Link>
                <Card.Link href={project.code}>See Code</Card.Link>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Cards;
