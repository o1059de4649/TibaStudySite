import React, { CSSProperties } from "react";
import { List, ListItem, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "./Common/ConstData";

const LessonSelecter = () => {

  const navigate = useNavigate(); // React Router のナビゲーションフック

  return (
    <div style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>
      <List>
        {ROUTES.map((section) => (
          <ListItem key={section.URL} style={{ justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(section.URL)} // URL変更＋遷移
              style={{
                width: "200px",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
              }}
            >
              {section.NAME}
            </Button>
          </ListItem>
        ))}
      </List>
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

export default LessonSelecter;
