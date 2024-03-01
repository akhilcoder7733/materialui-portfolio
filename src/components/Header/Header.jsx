import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const HeaderLink = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: "#111",
  cursor: "pointer",
  fontFamily: "Anta, sans-serif",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "#111",
    transform: "scaleX(0)",
    transition: "transform 0.3s ease",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
}));

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#d12afa", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          style={{ color: "#111", fontFamily: "Anta, sans-serif" }}
        >
          Portfolio
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <HeaderLink variant="body1" onClick={() => navigate("/")}>
          Home
        </HeaderLink>
        <HeaderLink variant="body1" onClick={() => navigate("/skills")}>
          Skills
        </HeaderLink>
        <HeaderLink variant="body1" onClick={() => navigate("/projects")}>
          Projects
        </HeaderLink>
        <Tooltip title="GitHub">
          <IconButton
            style={{ backgroundColor: "#fff", padding: 1, marginRight: "7px" }}
            onClick={() =>
              window.open("https://github.com/akhilcoder7733", "_blank")
            }
          >
            <GitHubIcon style={{ color: "#111" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="YouTube">
          <IconButton
            style={{ backgroundColor: "#fff", padding: 1 }}
            onClick={() =>
              window.open("https://www.youtube.com/@TerminalWizard", "_blank")
            }
          >
            <YouTubeIcon style={{ color: "red" }} />
          </IconButton>
        </Tooltip>
        {/* Add more buttons as needed */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
