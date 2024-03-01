import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "10vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(1),
  backgroundImage:
    "linear-gradient(112deg, rgba(122,56,50,1) 0%, rgba(214,71,103,1) 100%)",
  color: "#fff",
}));

function Footer() {
  return (
    <MainBox>
      <Typography variant="body1">© 2024 Your Company</Typography>
      <Typography variant="body2">
        Created with <Link style={{color:"#1027a4"}} href="https://mui.com/">Material-UI</Link> and React
      </Typography>
    </MainBox>
  );
}

export default Footer;
