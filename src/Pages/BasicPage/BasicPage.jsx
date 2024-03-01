import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Akhil from "../../assets/IMG_20240130_165259.jpg";
import particlesConfig from "../../components/Particles/particles-config.json";
import { motion } from "framer-motion";


const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(3),
  backgroundImage:
    "linear-gradient(180deg, rgba(209,42,250,1) 0%, rgba(242,114,114,1) 100%)",
}));

const ImageBox = styled(motion.div)(({ theme }) => ({
  backgroundColor: "red",
  width: 200,
  height: 200,
  borderRadius: "50%",
  overflow: "hidden",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const ImageAkhil = styled("img")(({ theme }) => ({
  width: "100%",
  objectFit: "cover",
  objectPosition: "center",
  transition: "all 0.6s ease-in-out",
  filter: "grayscale(100%)",
  "&:hover": {
    transform: "scale(1.5) translateY(20px)",
    filter: "grayscale(0%)",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Anta, sans-serif",
  zIndex: 1,
}));

function BasicPage() {
  useEffect(() => {
    // Initialize particles.js
    window.particlesJS("particles-js", particlesConfig);
  }, []);

  return (
    <MainBox>
      <div
        id="particles-js"
        style={{
          position: "absolute",
          width: "100%",
          height: "90%",
          top: "50px",
        }}
      ></div>
      <ImageBox
  animate={{
    y: [-10, 20, -20], // Use an array of values to create the up and down animation
    rotate: [5, 10, 0], // Rotate the image
    transition: {
      duration: 3.5, // Set the duration of each cycle
      repeat: Infinity, // Repeat the animation infinitely
      repeatType: "reverse", // Reverse the animation direction on each repeat
    },
  }}
>
  <ImageAkhil src={Akhil} alt="Akhil" />
</ImageBox>
      <StyledTypography variant="h2" fontWeight={600}>
        Hi, I am <span style={{
              backgroundImage:"linear-gradient(112deg, rgba(50,122,122,1) 0%, rgba(71,90,214,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              
            }}>Akhil</span>
      </StyledTypography>
      <StyledTypography variant="h6" width="70%">
        {" "}
        I specialize in building dynamic and responsive user interfaces. With
        expertise in using tools like Visual Studio Code and libraries such as
        Material-UI, I create engaging web experiences.
      </StyledTypography>
    </MainBox>
  );
}

export default BasicPage;
