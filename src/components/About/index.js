import React from "react";
import bitmoji from "../../images/hi.png";
import { Container, Row } from "react-bootstrap";

const styles = {
  img: {
    height: "400px",
    width: "400px",
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
  },
  header: {
    color: "#555B6E",
    marginBottom: "1rem",
    marginTop: "2rem",
  },
};

const About = () => {
  return (
    <main>
      <h2 className="my-4" style={styles.header}>
        About me
      </h2>
      <Container>
        <Row>
          <div className="col-xs-12 col-sm-6" style={styles.text}>
            <p>
              Hello and welcome to my portfolio. My name is Brad and I am full
              stack web developer specializing in JavaScript.
            </p>
          </div>
          <div className="col-xs-12 col-sm-6">
            <img src={bitmoji} style={styles.img} />
          </div>
        </Row>
      </Container>
    </main>
  );
};

export default About;
