import React, { CSSProperties } from "react";
import CodeBlock from "../Common/CodeBlock";

const FieldLessonJS = () => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        変数とは、プログラムの中で <strong>値を保存しておくための箱</strong> のようなものです。
      </p>

      <h2 style={styles.sectionTitle}>🌟 変数の基本 🌟</h2>
      <ul style={styles.list}>
        <li>✅ 変数はデータを保存する仕組み</li>
        <li>✅ `let`、`const`、`var` を使って宣言</li>
      </ul>
      <CodeBlock code={`let name = "Akira";  // name という変数に "Akira" を入れる
const age = 15;      // age という変数に 15 を入れる（変更不可）
var city = "Tokyo";  // city という変数に "Tokyo" を入れる（古い書き方）`} />
      <h2 style={styles.sectionTitle}>🚀 ポイントまとめ！</h2>
      <ul style={styles.list}>
        <li>⭐ `let` は変更OK、`const` は変更不可！</li>
        <li>⭐ 変数名は <strong>わかりやすく</strong> つけよう！（例：`userName` や `totalScore`）</li>
        <li>⭐ 文字は `"ダブルクォート"` または `'シングルクォート'` で囲もう！</li>
      </ul>

      <p style={styles.text}>
        💡 <strong>次へ進みましょう</strong> 💡<br />
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1400px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    //textAlign: "center",
    color: "#333",
  },
  sectionTitle: {
    fontSize: "20px",
    marginTop: "20px",
    color: "#444",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#555",
  },
  list: {
    textAlign: "start",
    fontSize: "16px",
    paddingLeft: "20px",
  } as CSSProperties,
  codeBlock: {
    backgroundColor: "#eee",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "14px",
    overflowX: "auto",
  } as CSSProperties,
};

export default FieldLessonJS;
