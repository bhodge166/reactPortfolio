import React from "react";

const styles = {
  h: {
    color: "#FAF9F9",
  },
  text: {
    color: "#555B6E",
  },
};

const Resume = () => {
  return (
    <main>
      <h2 style={styles.h}>Skills</h2>
      <ul style={styles.text}>
        <li>Javascript</li>
        <li>React</li>
        <li>SQL</li>
        <li>NoSql</li>
        <li>Apollo</li>
        <li>NodeJS</li>
        <li>Express</li>
        <li>GraphQL</li>
      </ul>
      <h2 style={styles.h}>Resume</h2>
      <p style={styles.text}>Please see the link below for my resume</p>
      <a href="https://drive.google.com/file/d/10tWFsz29AyejcMITf8ZW5NrpuM-fYEQV/view?usp=sharing">
        Resume
      </a>
    </main>
  );
};

export default Resume;
