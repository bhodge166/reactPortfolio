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
        href="https://drive.google.com/file/d/10tWFsz29AyejcMITf8ZW5NrpuM-fYEQV/view?usp=sharing"
      >
        Please click here for a copy of my resume
      </a>
    </div>
  );
};

export default Resume;
