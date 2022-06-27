import React from "react";
import { Card, Container, Row } from "react-bootstrap";

const styles = {
  text: {
    color: "#555B6E",
    marginBottom: "1rem",
    marginTop: "2rem",
  },
  card: {
    background: "#FAF9F9",
    width: "18rem",
    color: "#89B0AE",
  },
  cardImage: {
    objectFit: "cover",
    width: "100%",
  },
  titleText: {
    color: "#555B6E",
  },
};

const Cards = ({ projects }) => {
  return (
    <main>
      <h2 style={styles.text}>Projects</h2>
      <Container>
        <Row>
          {projects.map((project) => (
            <Card className="m-2 p-0" style={styles.card}>
              <Card.Img
                variant="top"
                src={project.img}
                style={styles.cardImage}
              />
              <Card.Body>
                <Card.Title style={styles.titleText} className="py-1">
                  {project.title}
                </Card.Title>
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
