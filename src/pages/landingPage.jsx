import React from "react";
import { Box, Typography, Card, CardContent, Fade } from "@mui/material";
import { Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import CodeIcon from "@mui/icons-material/Code";

const portraitStyles = {
  width: 220,
  height: 260,
  borderRadius: 4,
  overflow: "hidden",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
  background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.4s cubic-bezier(.4,2,.6,1)",
  willChange: "transform",
  "&:hover": {
    transform: "scale(1.04)",
  },
};

const columnStyles = {
  textAlign: "center",
  flex: 1,
};

const iconStyles = {
  fontSize: 50,
  color: "rgb(16.1% 20% 32.2%)",
  marginBottom: 0,
};

export default function LandingPage() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Box
      sx={{
        // maxHeight: { xs: "100vh", md: "100%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 2, md: 4 },
        // mb: { xs: 45, md: 0 },
        // mt: { xs: 40, md: 4 },
      }}
    >
      <Fade in={show} timeout={500}>
        <Card
          elevation={8}
          sx={{
            borderRadius: { xs: 0, md: 6 },
            minWidth: { xs: "90vw", md: 900 },
            maxWidth: 1100,
            padding: { xs: 2, md: 4 },
            background: "rgba(255,255,255,0.75)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
            backdropFilter: "blur(12px)",
            transition: "box-shadow 0.4s cubic-bezier(.4,2,.6,1)",
            "&:hover": {
              boxShadow: "0 16px 48px 0 rgba(31, 38, 135, 0.22)",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Portrait Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 0, md: 6 },
            }}
          >
            <Fade in={show} timeout={1200}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 4,
                  transition: "transform 0.4s cubic-bezier(.4,2,.6,1)",
                  "&:hover > div": {
                    transform: "scale(1.04)",
                  },
                }}
              >
                <Box sx={portraitStyles}>
                  <img
                    alt="Portrait of Lennard Szyperski"
                    src="/portrait.jpg"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      borderRadius: 16,
                    }}
                  />
                </Box>
              </Box>
            </Fade>
            <Fade in={show} timeout={2500}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textAlign: "left",
                  alignSelf: "center",
                  color: "rgb(16.1% 20% 32.2%)",
                  mb: 2,
                  maxWidth: 500,
                  padding: { xs: 2, md: 0 },
                }}
              >
                Welcome to my portfolio! I'm a full-stack web developer and
                recent RIT summa cum laude graduate, passionate about creating
                intuitive, user-centered solutions with React, Node.js,
                JavaScript, Java, and Figma. 
                <br />
                Dive in to explore my projects and
                see how I blend creativity, technical expertise, and leadership
                to deliver impactful digital experiences!
              </Typography>
            </Fade>
          </Box>

          {/* Introduction Section */}
          <CardContent
            sx={{
              width: "100%",
              padding: 0,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "center", md: "flex-start" },
              gap: 4,
            }}
          >
            {/* Column 1: Education */}
            <Box sx={columnStyles}>
              <SchoolIcon sx={iconStyles} />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: 1 }}
              >
                Education
              </Typography>
              <Typography variant="h6" sx={{ color: "#555", fontWeight: 500 }}>
                Rochester Institute of Technology
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#777", fontSize: "1.1rem" }}
              >
                BS in Human Centered Computing
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#777", fontSize: "1.1rem" }}
              >
                3.92 GPA, Summa Cum Laude
              </Typography>
            </Box>

            {/* Column 2: Skills */}
            <Box sx={columnStyles}>
              <BuildIcon sx={iconStyles} />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: 1 }}
              >
                Skills
              </Typography>
              <Box>
                <Typography
                  variant="body1"
                  component={Link}
                  to="/dev"
                  sx={{
                    display: "inline-block",
                    color: "#333",
                    textDecoration: "none",
                    background: "rgba(16, 20, 32, 0.06)",
                    borderRadius: 2,
                    px: 1.5,
                    py: 0.5,
                    fontWeight: 500,
                    transition: "background 0.2s, box-shadow 0.2s",
                    boxShadow: "none",
                    cursor: "pointer",
                    mb: 1,
                    "&:hover, &:focus": {
                      background: "rgba(16, 20, 32, 0.13)",
                      boxShadow: "0 2px 8px 0 rgba(31, 38, 135, 0.08)",
                      textDecoration: "none",
                    },
                  }}
                >
                  Technical Project Management
                </Typography>
                <Typography
                  variant="body1"
                  component={Link}
                  to="/dev"
                  sx={{
                    display: "inline-block",
                    color: "#333",
                    textDecoration: "none",
                    background: "rgba(16, 20, 32, 0.06)",
                    borderRadius: 2,
                    px: 1.5,
                    py: 0.5,
                    fontWeight: 500,
                    transition: "background 0.2s, box-shadow 0.2s",
                    boxShadow: "none",
                    cursor: "pointer",
                    mb: 1,
                    ml: 1,
                    "&:hover, &:focus": {
                      background: "rgba(16, 20, 32, 0.13)",
                      boxShadow: "0 2px 8px 0 rgba(31, 38, 135, 0.08)",
                      textDecoration: "none",
                    },
                  }}
                >
                  Full-Stack Development
                </Typography>
              </Box>
              <Typography
                variant="body1"
                component={Link}
                to="/design"
                sx={{
                  display: "inline-block",
                  color: "#333",
                  textDecoration: "none",
                  background: "rgba(16, 20, 32, 0.06)",
                  borderRadius: 2,
                  px: 1.5,
                  py: 0.5,
                  fontWeight: 500,
                  transition: "background 0.2s, box-shadow 0.2s",
                  boxShadow: "none",
                  cursor: "pointer",
                  "&:hover, &:focus": {
                    background: "rgba(16, 20, 32, 0.13)",
                    boxShadow: "0 2px 8px 0 rgba(31, 38, 135, 0.08)",
                    textDecoration: "none",
                  },
                }}
              >
                UX/UI Design
              </Typography>
            </Box>

            {/* Column 3: Toolkit */}
            <Box sx={columnStyles}>
              <CodeIcon sx={iconStyles} />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: 1 }}
              >
                Toolkit
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#555", fontSize: "1.1rem" }}
              >
                React, JavaScript, MySQL
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#555", fontSize: "1.1rem" }}
              >
                Node.js, Figma, Git
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#555", fontSize: "1.1rem" }}
              >
                Material-UI, Java
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Fade>
    </Box>
  );
}
