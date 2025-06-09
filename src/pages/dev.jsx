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
