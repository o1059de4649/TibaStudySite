import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CodeSandBoxToggleSwitch from "./CodeSandBoxToggleSwitch";
type HeaderProps = {
  checked: boolean;
  onToggle: (value: boolean) => void; // 親に値を渡す関数
};

const Header: React.FC<HeaderProps> = ({ onToggle, checked }) => {
  const navigate = useNavigate();
  
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          💻 千葉さんのプログラムレッスン 💻
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
          }}
          onClick={() => navigate("/")}
        >
          ホームへ戻る
        </Button>
        </Typography>
        <CodeSandBoxToggleSwitch checked={checked} onToggle={(value) =>{onToggle(value);}}  />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
