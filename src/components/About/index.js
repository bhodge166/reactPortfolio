import React from "react";
import bitmoji from "../../images/bitmoji.png";
import { Container, Row } from "react-bootstrap";
import { DiJsBadge, DiNodejsSmall, DiReact } from "react-icons/di";
import { SiMysql, SiMongodb, SiGraphql } from "react-icons/si";

const styles = {
  img: {
    height: "400px",
    width: "400px",
    margin: "auto",
  },
  text: {
    color: "#555B6E",
    fontSize: "1.5rem",
  },
  header: {
    color: "black",
    marginBottom: "1rem",
    marginTop: "2rem",
  },
  devTools: {
    borderStyle: "solid",
    color: "#FAF9F9",
    height: "6rem",
    width: "6rem",
    borderColor: "#555B6E",
  },
  spacing: {
    marginBottom: "4rem",
  },
};

const About = () => {
  return (
    <div style={styles.spacing}>
      <Container style={styles.spacing}>
        <h1 className="my-4" style={styles.header}>
          About Me
        </h1>
        <Row>
          <div className="col-xs-12 col-sm-5">
            <img src={bitmoji} style={styles.img} />
          </div>
          <div className="col-xs-12 col-sm-7" style={styles.text}>
            <p style={styles.text}>
              Based in Denver, I leverage a background in customer service to
              deliver client satisfaction through leadership and technical
              know-how.
            </p>
            <p style={styles.text}>
              A graduate of the University of Denver's full stack development
              bootcamp, I strive to create modern, scalable, and performant web
              applications utilizing the MERN+G stack as my preferred
              development architecture.
            </p>
          </div>
        </Row>
      </Container>
      <h1 style={styles.header}>Developer Tools</h1>
      <DiJsBadge className="m-2" style={styles.devTools} />
      <DiNodejsSmall className="m-2" style={styles.devTools} />
      <DiReact className="m-2" style={styles.devTools} />
      <SiMysql className="m-2" style={styles.devTools} />
      <SiMongodb className="m-2" style={styles.devTools} />
      <SiGraphql className="m-2" style={styles.devTools} />
    </div>
  );
};

export default About;
