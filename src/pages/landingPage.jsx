import React from "react";
import { Box, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import CodeIcon from "@mui/icons-material/Code";

const portraitStyles = {
  width: 220,
  height: 260,
  borderRadius: 4,
  overflow: "hidden",
  boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
  background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
      }}
    >
      {/* Portrait Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 4,
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
            }}
          />
        </Box>
      </Box>

      {/* Introduction Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "flex-start" },
          width: "100%",
          maxWidth: 1200,
          gap: 4,
        }}
      >
        {/* Column 1: Education */}
        <Box sx={columnStyles}>
          <SchoolIcon sx={iconStyles} />
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            Education
          </Typography>
          <Typography variant="body1" sx={{ color: "#555" }}>
            Rochester Institute of Technology
          </Typography>
          <Typography variant="body2" sx={{ color: "#777" }}>
            BS in Human Centered Computing
          </Typography>
          <Typography variant="body2" sx={{ color: "#777" }}>
            3.92 GPA, Summa Cum Laude
          </Typography>
        </Box>

        {/* Column 2: Skills */}
        <Box sx={columnStyles}>
          <BuildIcon sx={iconStyles} />
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            Skills
          </Typography>
          <Typography variant="body1" sx={{ color: "#555" }}>
            Technical Project Management
          </Typography>
          <Typography variant="body1" sx={{ color: "#555" }}>
            Full-Stack Development
          </Typography>
          <Typography variant="body1" sx={{ color: "#555" }}>
            UX/UI Design
          </Typography>
        </Box>

        {/* Column 3: Toolkit */}
        <Box sx={columnStyles}>
          <CodeIcon sx={iconStyles} />
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            Toolkit
          </Typography>
          <Typography variant="body1" sx={{ color: "#555" }}>
            React, JavaScript, MySQL
          </Typography>
          <Typography variant="body1" sx={{ color: "#555" }}>
            Node.js, Figma, Git
          </Typography>
          <Typography variant="body1" sx={{ color: "#555" }}>
            Material-UI, Java
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
