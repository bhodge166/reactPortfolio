import React from "react";
import programImg from "../../images/progimg2.png";
import { Container, Row } from "react-bootstrap";

const styles = {
  img: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  div: {
    position: "relative",
  },
  span: {
    position: "absolute",
    padding: "2rem",
  },
  text: {
    color: "#555B6E",
    fontSize: "1.5rem",
    fontFamily: "'Fredoka', sans-serif",
  },
  header: {
    color: "black",
    marginBottom: "2rem",
    marginTop: "2rem",
    fontFamily: "'Fredoka', sans-serif",
  },
  spacing: {
    marginBottom: "4rem",
  },
};

const Hello = () => {
  return (
    <div style={styles.spacing}>
      <Container>
        <h1 style={styles.header}>Welcome!</h1>
        <Row>
          <div className="col-xs-12 col-sm-7" style={styles.text}>
            <p style={styles.text}>
              My name is Brad and I am full stack web developer specializing in
              JavaScript.
            </p>
            <p style={styles.text}>
              Please take a look around to get more information about me and see
              some of the projects I've worked on.
            </p>
          </div>
          <div className="col-xs-12 col-sm-5">
            <img src={programImg} style={styles.img} />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Hello;
