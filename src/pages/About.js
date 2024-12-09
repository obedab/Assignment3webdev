import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Group 1's Project in React.js</h1>
      <p style={styles.text}>
        Hello and welcome! We are Group 1, excited to share our React.js project. We've dedicated significant time to
        mastering React.js concepts, completing exercises and challenges to enhance our skills and understanding of this
        powerful library.
      </p>
      <ul style={styles.list}>
        <li>A detailed application of React.js concepts.</li>
        <li>Practical solutions to the exercises we tackled.</li>
        <li>Insights into the challenges we faced and how we overcame them.</li>
      </ul>
      <p style={styles.text}>
        We hope this project serves as both an informative and inspiring showcase of our journey in learning React.js.
        Thank you for exploring our work!
      </p>
      <div style={styles.buttonContainer}>
        <Link to="/" style={styles.link}>
          <button style={styles.button}>Return Home</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2em",
    textAlign: "center",
    color: "#333",
  },
  text: {
    fontSize: "1.2em",
    lineHeight: "1.6",
    color: "#555",
  },
  list: {
    marginTop: "10px",
    marginBottom: "20px",
    paddingLeft: "20px",
    color: "#555",
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  link: {
    textDecoration: "none",
  },
};

export default About;
