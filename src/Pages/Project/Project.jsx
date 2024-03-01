import React, { useRef } from "react";
import { styled } from "@mui/system";
import { Box, Card, Typography } from "@mui/material";
import ScrShot1 from "../../assets/Screenshot (6).png";
import ScrShot2 from "../../assets/Screenshot (7).png";
import ScrShot3 from "../../assets/Screenshot (8).png";
import ScrShot4 from "../../assets/Screenshot (9).png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiGooglefonts } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "90vh",
  padding: theme.spacing(2),
  backgroundImage:
    "linear-gradient(112deg, rgba(58,178,236,1) 0%, rgba(135,182,103,1) 100%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  overflow: "hidden",
}));

const StyledBox = styled(Card)(({ theme }) => ({
  height: "100%",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(1),
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  borderRadius: "0 0 15px 15px",
  zIndex: 1,
  transform: "translateY(100%)",
  transition: "transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 0.8)",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    top: 0,
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: 300,
  width: 600,
  borderRadius: "15px",
  backgroundImage:
    "linear-gradient(180deg, rgba(130,80,246,1) 0%, rgba(80,89,251,1) 100%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  transition: "all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)",
  overflow: "hidden",
  position: "relative",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "0px 0px 52px 1px rgba(0,0,0,0.96)",
    filter: "brightness(90%)",
  },
  "&:hover .inner": {
    transform: "translateY(0)",
  },
  [theme.breakpoints.down("sm")]: {
    height: 180,
    width: 360,
  },
}));

const StyledImages = styled("img")(({ theme }) => ({
  width: "100%",
  height: 300,
  objectFit: "fill",
}));

const StyledTypo = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Anta, sans-serif",
}));

const OneCard = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  minHeight: "40vh",
  // backgroundColor: "red",
  width: "80%",
  [theme.breakpoints.down("sm")]:{
    width:"100%",
    flexDirection:"column",
    minHeight: "10vh",
    backgroundColor:"rgba(247, 79, 237, 0.5)",
    borderRadius:"20px",
    justifyContent:"center",
    '&.second':{
      flexDirection:"column-reverse"
    },
    '&.fourth':{
      flexDirection:"column-reverse"
    },
  },
  
  
}));

const DetailBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  minHeight: "40vh",
  // backgroundColor: "green",
  [theme.breakpoints.down("sm")]:{
    minHeight:"20vh"
  }
}));

const StyledHeading = styled(Box)(({ theme }) => ({
  minHeight: "20vh",
  // backgroundColor:"red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
  fontSize: "42px",
}));

function Project() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  const handleMouseMove = (e, cardRef) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${
      x / 10
    }deg) rotateX(${-y / 10}deg)`;
  };

  const handleMouseLeave = (cardRef) => {
    cardRef.current.style.transform = "none";
  };

  return (
    
    <MainBox>
      <StyledHeading>
        <StyledTypo variant="h3">My Projects</StyledTypo>
        <StyledTypo
          variant="body1"
          style={{
            justifyContent: "center",
            display: "flex",
            gap: "5px",
            cursor: "pointer",
          }}
          onClick={() =>
            window.open("https://www.youtube.com/@TerminalWizard", "_blank")
          }
        >
          <YouTubeIcon style={{ color: "#ed1a2f" }} />
          Terminal Wizard
        </StyledTypo>
        <StyledTypo variant="h6">
          projects include a photography website named "Pencil Shadows," which
          showcases drawings and paintings, and a portfolio website created for
          a college project. Both projects are styled using Material-UI for a
          modern and visually appealing look. You have integrated Firebase into
          your projects for user authentication, profile management, and
          storage, enhancing the functionality and user experience of the
          websites. Additionally, you have implemented features like image
          sliders, profile picture management, and page transitions, showcasing
          your skills in creating dynamic and engaging web experiences with
          React.js.
        </StyledTypo>
      </StyledHeading>

      {/* cards section */}
      <OneCard className="first">
        <Box data-aos="fade-up" data-aos-delay="100">
          <StyledCard
            ref={card1Ref}
            onMouseMove={(e) => handleMouseMove(e, card1Ref)}
            onMouseLeave={() => handleMouseLeave(card1Ref)}
            onClick={() =>
              window.open(
                "https://akhilcoder7733.github.io/frameLaunch/",
                "_blank"
              )
            }
          >
            <StyledImages src={ScrShot1} alt="Image 1" />
            <StyledBox className="inner">
              <Box
                sx={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <StyledTypo variant="h4">Photography Website Design</StyledTypo>
                <StyledTypo variant="body1">
                  The site features a user-friendly interface with a homepage,
                  image gallery, and about page, all styled using Material-UI
                  for a sleek and modern look. Integrated with Firebase for
                  efficient storage and retrieval of images, the website offers
                  visitors an immersive experience, highlighting the artist's
                  talent and creativity.
                </StyledTypo>
              </Box>
            </StyledBox>
          </StyledCard>
        </Box>
        <DetailBox>
          <StyledTypo variant="h4" fontWeight={600}>
            Photography Website
          </StyledTypo>
          <StyledTypo
            variant="body1"
            style={{
              justifyContent: "center",
              display: "flex",
              gap: "5px",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open("https://www.youtube.com/@TerminalWizard", "_blank")
            }
          >
            <YouTubeIcon style={{ color: "#ed1a2f" }} />
            Terminal Wizard
          </StyledTypo>
          <StyledTypo variant="h5">Made with:</StyledTypo>
          <IconBox>
            <FaReact color="#1ae7eb" />
            <SiMui color="#1e5ceb" />
            <SiGooglefonts />
            
          </IconBox>
        </DetailBox>
      </OneCard>

      <OneCard className="second">
        <DetailBox>
          <StyledTypo variant="h4" fontWeight={600}>
            Firebase Website
          </StyledTypo>
          <StyledTypo
            variant="body1"
            style={{
              justifyContent: "center",
              display: "flex",
              gap: "5px",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open("https://www.youtube.com/@TerminalWizard", "_blank")
            }
          >
            <YouTubeIcon style={{ color: "#ed1a2f" }} />
            Terminal Wizard
          </StyledTypo>
          <StyledTypo variant="h5">Made with:</StyledTypo>
          <IconBox>
          <FaReact color="#1ae7eb" />
            <SiMui color="#1e5ceb" />
            <SiGooglefonts />
            <SiFirebase color="#e3c42b" />
            
          </IconBox>
        </DetailBox>
        <Box data-aos="fade-up" data-aos-delay="200">
          <StyledCard
            ref={card2Ref}
            onMouseMove={(e) => handleMouseMove(e, card2Ref)}
            onMouseLeave={() => handleMouseLeave(card2Ref)}
            onClick={() =>
              window.open(
                "https://akhilcoder7733.github.io/materialUi-firebase/",
                "_blank"
              )
            }
          >
            <StyledImages src={ScrShot2} alt="Image 2" />
            <StyledBox className="inner">
              <Box
                sx={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <StyledTypo variant="h4">Firebase Authentication</StyledTypo>
                <StyledTypo variant="body1">
                  The website utilizes Firebase Authentication to provide users
                  with a secure and seamless login experience. Users can easily
                  create an account or sign in using their email and password,
                  or through popular social media platforms like Google or
                  Facebook. Once authenticated, users can access personalized
                  content, such as profile information and settings.
                </StyledTypo>
              </Box>
            </StyledBox>
          </StyledCard>
        </Box>
      </OneCard>

      <OneCard className="third">
        <Box data-aos="fade-up" data-aos-delay="300">
          <StyledCard
            ref={card3Ref}
            onMouseMove={(e) => handleMouseMove(e, card3Ref)}
            onMouseLeave={() => handleMouseLeave(card3Ref)}
            onClick={() =>
              window.open(
                "https://akhilcoder7733.github.io/firebase-react-materialui/",
                "_blank"
              )
            }
          >
            <StyledImages src={ScrShot3} alt="Image 3" />
            <StyledBox className="inner">
              <Box
                sx={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <StyledTypo variant="h4">
                  Ecommerce website with Firebase
                </StyledTypo>
                <StyledTypo variant="body1">
                  The eCommerce website is built using Material-UI for its sleek
                  and responsive design, providing users with an intuitive
                  shopping experience. Integrated with Firebase, the website
                  offers secure user authentication, real-time database
                  capabilities, and efficient storage solutions for product
                  information and user data.
                </StyledTypo>
              </Box>
            </StyledBox>
          </StyledCard>
        </Box>
        <DetailBox>
          <StyledTypo variant="h4" fontWeight={600}>
          Firebase Authentication Website
          </StyledTypo>
          <StyledTypo
            variant="body1"
            style={{
              justifyContent: "center",
              display: "flex",
              gap: "5px",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open("https://www.youtube.com/@TerminalWizard", "_blank")
            }
          >
            <YouTubeIcon style={{ color: "#ed1a2f" }} />
            Terminal Wizard
          </StyledTypo>
          <StyledTypo variant="h5">Made with:</StyledTypo>
          <IconBox>
          <FaReact color="#1ae7eb" />
            <SiFirebase color="#e3c42b" />
            <SiMui color="#1e5ceb" />
            <SiGooglefonts />
           
          </IconBox>
        </DetailBox>
      </OneCard>

      <OneCard className="fourth">
        <DetailBox>
          <StyledTypo variant="h4" fontWeight={600}>
Personal Website
          </StyledTypo>
          <StyledTypo
            variant="body1"
            style={{
              justifyContent: "center",
              display: "flex",
              gap: "5px",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open("https://www.youtube.com/@TerminalWizard", "_blank")
            }
          >
            <YouTubeIcon style={{ color: "#ed1a2f" }} />
            Terminal Wizard
          </StyledTypo>
          <StyledTypo variant="h5">Made with:</StyledTypo>
          <IconBox>
          <FaReact color="#1ae7eb" />
            <SiMui color="#1e5ceb" />
            <SiGooglefonts />
            <SiFirebase color="#e3c42b" />
            <TbBrandFramerMotion color="#e81edb" />
          </IconBox>
        </DetailBox>
        <Box data-aos="fade-up" data-aos-delay="400">
          <StyledCard
            ref={card4Ref}
            onMouseMove={(e) => handleMouseMove(e, card4Ref)}
            onMouseLeave={() => handleMouseLeave(card4Ref)}
            onClick={() =>
              window.open(
                "https://akhilcoder7733.github.io/pencil-shadows-reactjs/",
                "_blank"
              )
            }
          >
            <StyledImages src={ScrShot4} alt="Image 4" />
            <StyledBox className="inner">
              <Box
                sx={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <StyledTypo variant="h4">Drawing Website Design</StyledTypo>
                <StyledTypo variant="body1">
                  Created with Material-UI, offers a platform for users to
                  showcase their artistic creations. With a clean and
                  user-friendly interface, the website provides tools and
                  features for users to upload, share, and view drawings.
                  Integrated with Firebase, the website offers secure
                  authentication and storage for user-generated content.
                </StyledTypo>
              </Box>
            </StyledBox>
          </StyledCard>
        </Box>
      </OneCard>
    </MainBox>
  );
}

export default Project;
