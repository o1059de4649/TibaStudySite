import React, { useState, ReactNode } from "react";

type CodeBlockProps = {
  children: ReactNode; // 子要素としてコードを受け取る
};

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const codeText = typeof children === "string" ? children : "";
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2秒後に通知を消す
    } catch (error) {
      console.error("コピーに失敗しました", error);
    }
  };

  return (
    <div style={styles.container}>
      <pre style={styles.codeArea}>
        <code>{children}</code>
      </pre>
      <button onClick={handleCopy} style={styles.copyButton}>
        📋 コピー
      </button>
      {copied && <span style={styles.copiedMessage}>✅ コピーしました！</span>}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "relative",
    backgroundColor: "#222",
    padding: "15px",
    borderRadius: "8px",
    color: "#fff",
    maxWidth: "1400px",
    fontFamily: "monospace",
  },
  codeArea: {
    margin: 0,
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  },
  copyButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#444",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  copiedMessage: {
    display: "block",
    marginTop: "10px",
    color: "#4caf50",
  },
};

export default CodeBlock;
