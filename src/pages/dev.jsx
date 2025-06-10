import React from "react";
import { Box, Typography, Fade } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DevCard from "../components/devCard";

const projects = [
  {
    title: "Full-Stack Web App",
    description:
      "A club management web application built with React, Node.js, and MySQL.",
    videoUrl: [
      "https://www.youtube.com/embed/gozmpK-ZJh4?enablejsapi=1&si=05lcypgUkEibtdDB",
      "https://www.youtube.com/embed/D_CQ0duqVxI?enablejsapi=1&si=4QK1lMSwoyH7uC_q",
    ],
    repoUrl: "https://github.com/lennard-s/DIO",
    objectives:
      "Build a modular and scalable membership management system to track member status and participation.",
    learningOutcomes:
      "Technical Project Management, Full-stack development, REST APIs, authentication, data visualization, database design & construction.",
    techStack: ["React", "Node.js", "MySQL", "Express"],
    writeup: `
      Tackling the complexity of club management, our goal was to empower club leaders to efficiently track member engagement and participation at scale. This directly supports the business need for accurate reporting and streamlined operations, reducing manual overhead and errors. The design leverages modular UI components and robust backend logic to ensure data integrity and intuitive workflows, making it easy for users to manage large datasets without feeling overwhelmed. We asked questions about pain points in current processes to ensure our solution addressed real bottlenecks, not just surface-level issues.
    `,
  },
  {
    title: "Mobile App",
    description:
      "A iOS app for tracking personal rock climbing reviews, built with Swift.",
    videoUrl: "https://www.youtube.com/embed/bz4Lu-F3-9M?si=B14oBo0B7ClRifmX",
    repoUrl: "https://github.com/lennard-s/iOS-App",
    objectives:
      "Create a user-friendly mobile application that allows users to add and manage personal reviews for outdoor rock climbs.",
    learningOutcomes: "iOS development, mobile app design, user experience",
    techStack: ["Swift"],
    writeup: `
      The challenge was to help climbers document nuanced experiences and insights from each climb, supporting their growth and safety. This aligns with the broader business goal of increasing app engagement and retention by providing real value to users. The design focuses on quick entry, rich tagging, and easy retrieval of past climbs, ensuring users can capture and reflect on their progress. We asked users about their current journaling habits to uncover friction points and ensure the app truly fit into their routines.
    `,
  },
  {
    title: "Rush Hour Game",
    description: "A Java implementation of the game 'Rush Hour'.",
    videoUrl: "https://www.youtube.com/embed/LNWNootcsU8?si=M891mWMmTUBV40XJ",
    repoUrl: "https://github.com/lennard-s/RushHour_Java",
    techStack: ["Java", "JavaFX"],
    objectives:
      "Create a playable version of the game 'Rush Hour' with a focus on object-oriented programming, CLI development, and algorithm implementation.",
    learningOutcomes:
      "Object-oriented programming, JavaFX, user interface design, team programming.",
    writeup: `
      The core complexity was translating a physical puzzle into an engaging digital experience that challenges users' problem-solving skills. This supports educational and entertainment business goals by fostering logical thinking and replayability. The design uses clear visual cues and responsive controls to mimic the tactile feedback of the original game, ensuring users remain immersed. We asked questions about user frustration and satisfaction to refine the interface and keep the challenge enjoyable rather than tedious.
    `,
  },
];

const settings = {
  dots: true,
  adaptiveHeight: false,
  infinite: true,
  centerMode: true,
  centerPadding: "5px",
  centered: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function DevPage() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Fade in={show} timeout={500}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: { xs: "80vh", md: "90vh" },
          px: 4,
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#333",
            mb: { xs: 0, md: 2 },
            textAlign: "center",
            pt: 2,
          }}
        >
          Dev Projects
        </Typography>
        <Box sx={{ width: "100%", maxWidth: 900, height: "80vh" }}>
          <Slider {...settings}>
            {projects.map((project, idx) => (
              <DevCard key={idx} {...project} />
            ))}
          </Slider>
        </Box>
      </Box>
    </Fade>
  );
}
