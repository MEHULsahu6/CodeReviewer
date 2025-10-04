import React from "react";

const Docs = () => {
  const messages = [
    { type: "bot", text: "Hello! I'm your AI assistant 🤖. I can guide you through CodeReviewer." },
    { type: "user", text: "How do I write code?" },
    { type: "bot", text: "Simply enter your JavaScript code in the editor on the Home page. Ensure it's properly formatted for accurate review." },
    { type: "user", text: "How can I get a code review?" },
    { type: "bot", text: "Click the 'Review' button below the editor. The AI will analyze your code and provide suggestions, improvements, and possible issues." },
    { type: "user", text: "Which languages are supported?" },
    { type: "bot", text: "Currently, only JavaScript is supported. More languages will be added in future updates." },
    { type: "user", text: "How can I provide feedback?" },
    { type: "bot", text: "Reach out via the Contact page or email at mehul@example.com." }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CodeReviewer Docs</h1>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.type === "bot" ? "flex-start" : "flex-end",
              backgroundColor: msg.type === "bot" ? "#343541" : "#444654",
              color: "#fff",
              borderRadius: msg.type === "bot" ? "12px 12px 12px 0" : "12px 12px 0 12px"
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "60px auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#202123",
    borderRadius: "8px",
    color: "#fff",
    height: "80vh",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#f5f5f5"
  },
  chatBox: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "10px",
    overflowY: "auto",
    backgroundColor: "#343541",
    borderRadius: "8px"
  },
  message: {
    padding: "12px 18px",
    fontSize: "16px",
    maxWidth: "70%",
    wordWrap: "break-word",
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
  }
};

export default Docs;
