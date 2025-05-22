import React from "react";
import { Typography, Box, Divider, Paper } from "@mui/material";

const Resume = () => {
  return (
    <Paper
      sx={{
        // backgroundColor: '#f5f5f5',
        padding: { xs: 2, sm: 4 },
        borderRadius: 0,
        maxWidth: "800px",
        margin: "auto",
        fontFamily: '"Roboto", sans-serif',
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#333",
          textAlign: "center",
          marginBottom: 1,
        }}
      >
        Lennard Szyperski
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          color: "#555",
          marginBottom: 2,
        }}
      >
        <a
          href="mailto:lennardszyperski@gmail.com"
          style={{ color: "#1976d2", textDecoration: "none" }}
        >
          lennardszyperski@gmail.com
        </a>{" "}
        | (425) 985-4606{" "}
      </Typography>
      <Divider sx={{ marginBottom: 3 }} />

      {/* Summary Section */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#333", marginBottom: 1 }}
        >
          Summary
        </Typography>
        <Typography variant="body1" sx={{ color: "#444", lineHeight: 1.6 }}>
          I'm a full-stack web developer and recent summa cum laude graduate
          from RIT with a BS in Human Centered Computing. With a passion for
          user-centered design, I craft intuitive, impactful solutions using
          React, Node.js, JavaScript, and Java, while also excelling in UX
          prototyping with Figma. My experience ranges from leading capstone web
          development projects to managing teams as an Assistant Superintendent,
          blending technical expertise with strong leadership. Explore my work
          to see how I bring creativity and collaboration to software
          engineering, UX/UI design, and technical project management!
        </Typography>
      </Box>

      {/* Education Section */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#333", marginBottom: 1 }}
        >
          Education
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "medium", color: "#444" }}
        >
          Rochester Institute of Technology
        </Typography>
        <Typography variant="body2" sx={{ color: "#777", marginBottom: 1 }}>
          BS, Human-Centered Computing | Summa Cum Laude, 3.92 GPA | May 2025
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "medium", color: "#444" }}
        >
          Bellevue College
        </Typography>
        <Typography variant="body2" sx={{ color: "#777" }}>
          AAS, Arts & Sciences | High Distinction, 4.0 GPA | June 2022
        </Typography>
      </Box>

      {/* Skills Section */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#333", marginBottom: 1 }}
        >
          Skills and Talents
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "medium", color: "#444", marginBottom: 0.5 }}
        >
          Technical Skills:
        </Typography>
        <Typography variant="body2" sx={{ color: "#777", marginBottom: 1 }}>
          React, Figma, Python, Swift, Java, JavaScript, HTML/CSS, Docker, Adobe
          Suite, Git, MySQL, Node.js, Material-UI
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "medium", color: "#444", marginBottom: 0.5 }}
        >
          Professional Skills:
        </Typography>
        <Typography variant="body2" sx={{ color: "#777" }}>
          Full-Stack Development, Technical Project Management, UX/UI Research &
          Design, Accessibility-Focused Design, Agile Methodologies, Waterfall
          Methodologies, Team Leadership, Technical Presentation, Public
          Speaking
        </Typography>
      </Box>

      {/* Projects Section */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#333", marginBottom: 1 }}
        >
          Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "medium", color: "#444", marginBottom: 0.5 }}
        >
          Senior Capstone (2024-2025)
        </Typography>
        <Typography variant="body2" sx={{ color: "#777", marginBottom: 1 }}>
          <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
            <li>
              Lead a team of 7 to develop a full-stack web app for club member
              tracking using React, Node.js, and MySQL.
            </li>
            <li>
              Designed user flows to improve task efficiency and team
              coordination.
            </li>
            <li>Played a key role in development across the full-stack.</li>
          </ul>
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "medium", color: "#444", marginBottom: 0.5 }}
        >
          Post-Project Review System (2021)
        </Typography>
        <Typography variant="body2" sx={{ color: "#777" }}>
          <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
            <li>
              Created an Excel-based performance tracking system for JAS,
              enabling evaluation of completed projects and driving process
              improvements.
            </li>
          </ul>
        </Typography>
      </Box>

      {/* Experience Section */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#333", marginBottom: 1 }}
        >
          Experience
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "medium", color: "#444", marginBottom: 0.5 }}
        >
          Software Design Intern, RIT ITS | Jan 2024 – Sep 2024
        </Typography>
        <Typography variant="body2" sx={{ color: "#777", marginBottom: 1 }}>
          <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
            <li>
              Identified and resolved navigation pain points, solving 5
              usability issues revealed through user research.
            </li>
            <li>
              Partnered with developers to ensure seamless design
              implementation, reducing development time by 15%.
            </li>
            <li>
              Modernized the UI to align with RIT’s design language and
              accessibility standards.
            </li>
          </ul>
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "medium", color: "#444", marginBottom: 0.5 }}
        >
          Assistant Superintendent, JAS Design Build | Jan 2019 – Jun 2022
        </Typography>
        <Typography variant="body2" sx={{ color: "#777", marginBottom: 1 }}>
          <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
            <li>Facilitated operations across 25+ construction projects.</li>
            <li>
              Designed Notion-based system to track performance across all
              active construction projects, improving task efficiency by 25%.
            </li>
            <li>
              Led initiatives to streamline and enhance job-site safety
              protocols.
            </li>
          </ul>
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "medium", color: "#444", marginBottom: 0.5 }}
        >
          Carpenter, Seaton’s Inc. | Mar 2018 – Dec 2018
        </Typography>
        <Typography variant="body2" sx={{ color: "#777", marginBottom: 1 }}>
          <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
            <li>
              Executed residential remodels, managing tasks from framing to
              finish work with minimal oversight.
            </li>
          </ul>
        </Typography>
      </Box>
    </Paper>
  );
};

export default Resume;
