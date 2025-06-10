import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Typography,
  Paper,
  Fade,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrototypeCard from "../components/prototypeCard";
import GraphicDesignCard from "../components/graphicDesignCard";
import PortfolioImageList from "../components/imageList";

// prototype data
const prototypes = [
  {
    title: "Tamagotchi BRONT",
    description:
      "A Tamagotchi-like experience, where the user can interact with a virtual pet.",
    figmaEmbedCode:
      "https://embed.figma.com/proto/g0v2A1yKpF2Sgtct9BbTzx/Tamagotchi-BRONT----?page-id=0%3A1&node-id=142-316&starting-point-node-id=34%3A10&embed-host=share",
    youtubeEmbedCode:
      "https://www.youtube.com/embed/IPbW7ZShpjg?si=XDgXpWKmrPZ_tOZl",
    objectives:
      "Practice thinking through and planning each step of a user's experience with a product.",
    learningOutcomes:
      "Advanced Figma prototyping, user flow planning and execution, ergonomics.",
    skillsApplied: "Figma, Spline, Typography, Layout, Animation, User Flow",
  },
  {
    title: "Campus Maps Redesign",
    description: "A complete overhaul of the RIT campus map experience.",
    figmaEmbedCode:
      "https://embed.figma.com/proto/UAOzmFJZhKM65EPHXo7UjW/Campus-Map-Redesign?page-id=0%3A1&node-id=1-2186&starting-point-node-id=1%3A2186&embed-host=share",
    youtubeEmbedCode: "https://www.youtube.com/embed/vge7aZ1ec8M?si=oPqYkaoCbZ7Al_4N",
  },
  {
    title: "North Star Goal Tracker",
    description: "An AI powered goal setting and tracking app.",
    figmaEmbedCode:
      "https://embed.figma.com/proto/tseog53dc3Bu6f151el3EJ/North-Star-Prototype?page-id=0%3A1&node-id=1-809&starting-point-node-id=1%3A809&embed-host=share",
    youtubeEmbedCode: "https://www.youtube.com/embed/Mty48cL7Wws?si=tgs6kWRN3OgMMXdQ",
  },
];

// Example graphic design data
const graphics = [
  {
    title: "Design is...",
    description:
      "Exploring the theme of 'Design is...' using Adobe Illustrator.",
    imageUrls: [
      "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747938734/Exercise1-PreliminaryComp-opt2_teotzf.png",
      "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747938695/Exercise1-Final_e6itob.png",
    ],
    imageOrientation: "portrait",
    objectives:
      "Explore the fundamentals of design to create visually engaging graphics.",
    learningOutcomes: "Improved layout, typography, and color theory skills.",
    skillsApplied: "Adobe Illustrator, Typography, Layout",
  },
  {
    title: "Campus News Website",
    description: "A redesign of a campus news site.",
    imageUrl:
      "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747938664/P1-Final_j98yzp.jpg",
    imageOrientation: "portrait",
    objectives: "Design a campus news landing page from scratch.",
    learningOutcomes:
      "Enhanced grid composition, hierarchy, and user-flow skills.",
    skillsApplied: "Figma, Layout, Typography",
  },
  // Add more as needed
];

const settings = {
  dots: true,
  adaptiveHeight: true,
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
      breakpoint: 768, // For smaller screens
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function DesignPage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [show, setShow] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // true for < md
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));     // true for >= md

  React.useEffect(() => {
    setShow(true);
  }, []);

  const handleTabChange = (event, newValue) => {
    if (newValue !== null) setSelectedTab(newValue);
  };

  return (
    <Fade in={show} timeout={500}>
      {/* Page Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          p: 2,
        }}
      >
        {/* Sidebar Tabs for md+ */}
        {isMdUp && (
          <Box sx={{ width: { xs: "90%", md: "fit-content" }, mr: 10 }}>
            <Paper
              sx={{
                position: { xs: "fixed", md: "sticky" },
                top: { xs: "unset", md: 180 },
                bottom: { xs: 0, md: "unset" },
                width: "fit-content",
                mb: { xs: 2, md: 0 },
                alignSelf: { xs: "center", md: "flex-start" },
                borderRadius: 1,
                background:
                  "linear-gradient(var(--angle), rgb(16.1% 20% 32.2%), rgb(36.5% 36.5% 43.5%))",
              }}
            >
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                orientation="vertical"
                variant="scrollable"
                indicatorColor="primary"
                textColor="inherit"
                sx={{
                  position: { xs: "fixed", md: "sticky" },
                  top: { xs: "unset", md: 180 },
                  bottom: { xs: 0, md: "unset" },
                  width: "fit-content",
                  mb: { xs: 2, md: 0 },
                  alignSelf: { xs: "center", md: "flex-start" },
                  borderRadius: 1,
                  borderRight: 1,
                  borderColor: "divider",
                  "& .MuiTabs-indicator": {
                    height: "2px",
                    borderRadius: "0px",
                    background:
                      "linear-gradient(var(--angle), rgb(96.9% 71.8% 63.9%), rgb(92.2% 72.9% 72.5%), rgb(94.9% 84.7% 84.7%), rgb(94.1% 91.8% 83.9%))",
                  },
                }}
                centered={false}
              >
                <Tab label="Prototyping" />
                <Tab label="Graphic Design" />
                <Tab label="Illustration" />
              </Tabs>
            </Paper>
          </Box>
        )}

        {/* Main Content Section */}
        <Box
          sx={{
            maxWidth: { xs: "90%", md: "60%" },
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            mx: { xs: "auto", md: "unset" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
              mb: 1,
            }}
          >
            Design Work
          </Typography>

          {/* Tabs row for screens below md */}
          {isMobile && (
            <Paper
              sx={{
                mb: 0,
                borderRadius: 1,
                background:
                  "linear-gradient(var(--angle), rgb(16.1% 20% 32.2%), rgb(36.5% 36.5% 43.5%))",
              }}
            >
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                orientation="horizontal"
                variant="scrollable"
                indicatorColor="primary"
                textColor="inherit"
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  "& .MuiTabs-indicator": {
                    height: "2px",
                    borderRadius: "0px",
                    background:
                      "linear-gradient(var(--angle), rgb(96.9% 71.8% 63.9%), rgb(92.2% 72.9% 72.5%), rgb(94.9% 84.7% 84.7%), rgb(94.1% 91.8% 83.9%))",
                  },
                }}
                centered
              >
                <Tab label="Prototyping" />
                <Tab label="Graphic Design" />
                <Tab label="Illustration" />
              </Tabs>
            </Paper>
          )}

          {selectedTab === 0 && (
            <Slider {...settings}>
              {prototypes.map((proto, index) => (
                <PrototypeCard key={index} {...proto} />
              ))}
            </Slider>
          )}
          {selectedTab === 1 && (
            <Slider {...settings}>
              {graphics.map((graphic, index) => (
                <GraphicDesignCard key={index} {...graphic} />
              ))}
            </Slider>
          )}
          {selectedTab === 2 && <PortfolioImageList />}
        </Box>
      </Box>
    </Fade>
  );
}
