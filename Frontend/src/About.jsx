import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.name}>Mehul</h1>
        <p style={styles.role}>Web Developer</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        <p>Email: <a href="mailto:mehulkumars315@gmail.com" style={styles.link}>mehulkumars315@gmail.com</a></p>
        <p>Phone: +91 9770989610</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={styles.text}>
          I am a passionate web developer with experience in JavaScript, React, Node.js, and MongoDB. 
          I enjoy creating modern, responsive, and user-friendly web applications.
        </p>
      </section>

      <footer style={styles.footer}>
        &copy; 2025 Mehul
      </footer>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    maxWidth: "600px",
    margin: "60px auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#fff",
    backgroundColor: "#202123",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.5)"
  },
  header: {
    textAlign: "center",
    marginBottom: "30px"
  },
  name: {
    fontSize: "32px",
    margin: "0",
    color: "#00bcd4"
  },
  role: {
    fontSize: "18px",
    color: "#ccc",
    marginTop: "5px"
  },
  section: {
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#343541",
    borderRadius: "6px",
    boxShadow: "0 1px 5px rgba(0,0,0,0.3)"
  },
  sectionTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#0a74da"
  },
  text: {
    fontSize: "16px",
    color: "#ddd"
  },
  link: {
    color: "#0a74da",
    textDecoration: "none"
  },
  footer: {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "14px",
    color: "#999"
  }
};

export default About;
