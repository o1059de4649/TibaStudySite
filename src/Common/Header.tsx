import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
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
        </Typography>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
