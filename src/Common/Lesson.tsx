import React from "react";

type LessonProps = {
  title: string;
  content: any;
};

const Lesson: React.FC<LessonProps> = ({ title, content }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.content}>{content}</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "10px",
  },
  title: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
  },
};

export default Lesson;
