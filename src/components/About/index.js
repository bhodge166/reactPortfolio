import React from "react";
import mypicture from "../../images/Me.png";
import { Container, Row } from "react-bootstrap";

const styles = {
  img: {
    height: "250px",
    width: "250px",
  },
  div: {
    position: "relative",
  },
  span: {
    position: "absolute",
    padding: "2rem",
  },
};

const About = () => {
  return (
    <main>
      <h2 className="my-4">About me</h2>
      <Container>
        <Row>
          <div className="col-xs-12 col-sm-6 cold-md-8 col-centered">
            <div style={styles.div}>
              <img
                src={mypicture}
                alt="me"
                className="img-thumbnail"
                style={styles.img}
              />
              <span style={styles.span}>
                Hello and welcome to my portfolio. My name is Brad and I am an
                aspiring web developer. I am currently learning to develop
                through a coding bootcamp
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </main>
  );
};

export default About;
