import React from "react";
import CodeSandbox from "../Lesson/CodeSandBox";

type LessonProps = {
  title: string;
  content: any;
  codeSandboxFlg: boolean;
};

const Lesson: React.FC<LessonProps> = ({ title, content, codeSandboxFlg }) => {
  const codeSandBox= () => {
    if(codeSandboxFlg){
    return(<div id="CodeSandboxContainer" style={styles.sandbox}>
        <CodeSandbox />
      </div>)
    }else{
      return(null);
    }

  }
  return (
    <div style={styles.container}>
      <div style={{flex: 1}}>
        <h2 style={styles.title}>{title}</h2>
        <div style={styles.content}>{content}</div>
      </div>
      {/* 右側にCodeSandboxを固定配置 */}
      {codeSandBox()}
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
    display: "flex", // 横並びレイアウト
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
    sandbox: {
    position: "fixed", // 常に右側に固定
    right: "0px", // 画面右端に配置
    top: "70px", // 上部に配置
    width: "400px", // 固定幅（画面サイズに応じて調整可）
    height: "calc(100vh - 40px)", // 画面の高さいっぱい
    overflowY: "auto", // スクロール可能
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
    padding: "10px",
  },
};

export default Lesson;
