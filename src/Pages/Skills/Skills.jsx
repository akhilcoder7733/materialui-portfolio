import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';
import img1 from '../../assets/bac/image (1).jpg';
import img2 from '../../assets/bac/image (2).jpg';
import img3 from '../../assets/bac/image (3).jpg';
import img4 from '../../assets/bac/image (4).jpg';
import img5 from '../../assets/bac/image (5).jpg';
import img6 from '../../assets/bac/image (6).jpg';
import img7 from '../../assets/bac/image (7).jpg';
import img8 from '../../assets/bac/image (8).jpg';
import img9 from '../../assets/bac/image (9).jpg';

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: '90vh',
  padding: theme.spacing(2),
  backgroundImage:
    'linear-gradient(180deg, rgba(232,185,244,1) 0%, rgba(241,193,193,1) 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const SkillBox = styled(Box)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  textAlign: 'center',
  boxShadow: '0px 10px 25px 1px rgba(0,0,0,0.54)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0px 10px 25px 1px rgba(0,0,0,0.84)',
    transform: 'translateY(-5px)',
  },
  '.skillme': {
    // backgroundColor: 'transparent',
    borderRadius: '15px',
    transition: 'all 0.4s ease-in-out',
  },
  '&:hover .skillme': {
    // backgroundColor: '#98d3f5',
    color:"#fff"
  },
}));


function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Node.js',
    'Python',
    'Sql',
    'Firebase',
    'Angular',
  ];

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const StyledTypography = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    fontFamily: 'Anta, sans-serif',
  }));

  const AboutBox = styled(Box)(({ theme }) => ({
    width: '70%',
  }));

  return (
    <MainBox>
      <StyledTypography variant="h2" align="center">
        Skills
      </StyledTypography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              data-aos="fade-in"
              data-aos-delay={`${index * 100}`}
              data-aos-duration={1000}
            >
           <SkillBox style={{ backgroundImage: `url(${images[index]})` }}>
  <StyledTypography variant="h4" className="skillme">
    {skill}
  </StyledTypography>
</SkillBox>

            </Box>
          </Grid>
        ))}
      </Grid>
      <AboutBox>
        <StyledTypography variant="h5">
          I am constantly learning and exploring new technologies to improve my skills and stay updated with the latest trends in web development.
        </StyledTypography>
      </AboutBox>
    </MainBox>
  );
}

export default Skills;
