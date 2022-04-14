import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-auto bg-light p-4">
      <div className="container text-center mb-2">
        <h4>
          <a className="m-1" href="https://github.com/bhodge166">
            <BsGithub />
          </a>
          <a
            className="m-1"
            href="https://www.linkedin.com/in/bradley-hodge-70606022b/"
          >
            <BsLinkedin />
          </a>
          <a className="m-1" href="mailto:bhodge166@gmail.com">
            <AiOutlineMail />
          </a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
