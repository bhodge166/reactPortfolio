import React from "react";
import { Card, Container, Row } from "react-bootstrap";

const styles = {
  text: {
    color: "black",
    marginBottom: "1rem",
    marginTop: "2rem",
  },
  card: {
    background: "#FAF9F9",
    width: "18rem",
    color: "#555B6E",
  },
  cardImage: {
    objectFit: "cover",
    width: "100%",
  },
  titleText: {
    color: "black",
  },
  spacing: {
    marginBottom: "4rem",
  },
};

const Cards = ({ projects }) => {
  return (
    <div style={styles.spacing}>
      <Container>
        <h1 style={styles.text}>Projects</h1>
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
                <Card.Link style={styles.titleText} href={project.deployed}>
                  Visit Site
                </Card.Link>
                <Card.Link style={styles.titleText} href={project.code}>
                  See Code
                </Card.Link>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
