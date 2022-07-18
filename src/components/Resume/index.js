import React from "react";

const styles = {
  h: {
    color: "black",
    marginBottom: "1rem",
    marginTop: "2rem",
  },
  text: {
    color: "#555B6E",
    fontSize: "1.5rem",
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
        href="https://drive.google.com/file/d/1xnHlgcl_E_8L54ad2GoFupFjQ2GN_iEx/view?usp=sharing"
      >
        Please click here for a copy of my resume
      </a>
    </div>
  );
};

export default Resume;
