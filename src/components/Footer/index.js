import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const styles = {
  footer: {
    background: "#555b6e",
  },
  image: {
    color: "#FAF9F9",
  },
};

const Footer = () => {
  return (
    <footer className="mt-auto p-3" style={styles.footer}>
      <div className="container text-center">
        <h4>
          <a className="m-2" href="https://github.com/bhodge166">
            <BsGithub style={styles.image} />
          </a>
          <a
            className="m-2"
            href="https://www.linkedin.com/in/bradley-hodge-70606022b/"
          >
            <BsLinkedin style={styles.image} />
          </a>
          <a className="m-2" href="mailto:bhodge166@gmail.com">
            <AiOutlineMail style={styles.image} />
          </a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
