import React from "react";

const styles = {
  h: {
    color: "black",
    marginBottom: "2rem",
    marginTop: "2rem",
    fontFamily: "'Fredoka', sans-serif",
  },
  text: {
    color: "#555B6E",
    fontSize: "1.5rem",
    fontFamily: "'Fredoka', sans-serif",
  },
  spacing: {
    marginBottom: "4rem",
  },
};

const Resume = () => {
  return (
    <div style={styles.spacing}>
      <h1 style={styles.h}>Resume</h1>
      <a
        style={styles.text}
        href="https://drive.google.com/file/d/1yJ1bNRoPqYjh8lgsaC1vvAW7M_cf8d4z/view?usp=sharing"
      >
        Please click here for a copy of my resume
      </a>
    </div>
  );
};

export default Resume;
