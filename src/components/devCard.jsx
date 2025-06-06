import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  IconButton,
  Tooltip,
  Divider,
  useTheme,
  useMediaQuery,
  Fade,
  Collapse,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function DevCard({
  title,
  description,
  videoUrl,
  repoUrl,
  objectives,
  learningOutcomes,
  techStack, // expects an array of strings
}) {
  const [showDetails, setShowDetails] = useState(false);
  const isMultiVideo = Array.isArray(videoUrl);
  const [currentVideo, setCurrentVideo] = useState(isMultiVideo ? 0 : null);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const [showFade, setShowFade] = useState(false);

  useEffect(() => {
    setShowFade(true);
  }, []);

  const contentRef = useRef(null);

  useEffect(() => {
    if (showDetails && contentRef.current) {
      // Scroll to bottom smoothly
      contentRef.current.scrollTo({
        top: contentRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [showDetails]);

  return (
    <Fade in={showFade} timeout={500}>
      <Paper
        sx={{
          p: 2,
          m: 1,
          display: "flex",
          flexDirection: "column",
          height: { xs: "70vh", sm: "70vh", md: "75vh" }, // Responsive height
          maxHeight: { xs: "70vh", sm: "70vh", md: "75vh" },
          minHeight: { xs: "50vh", sm: "50vh", md: "55vh" },
          overflow: "hidden",
        }}
      >
        {/* Top Row */}
        <Box
          sx={{
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
          }}
        >
          <Box>
            <Typography variant="h5" align="left" sx={{ color: "#333" }}>
              {title}
            </Typography>
            <Typography
              variant="body1"
              align="left"
              sx={{ mb: 2, color: "#555" }}
            >
              {description}
            </Typography>
          </Box>
          <Tooltip title={showDetails ? "Hide details" : "Show More details"}>
            {isXs ? (
              <IconButton
                onClick={() => setShowDetails(!showDetails)}
                color="inherit"
                sx={{
                  background: showDetails
                    ? "linear-gradient(var(--angle), rgb(16.1% 20% 32.2%), rgb(36.5% 36.5% 43.5%))"
                    : "#24292f",
                  color: "#fff",
                  borderRadius: "999px",
                  transition:
                    "transform 0.15s, box-shadow 0.15s, background 0.15s",
                  "&:hover": {
                    background: showDetails
                      ? "#24292f"
                      : "linear-gradient(var(--angle), rgb(16.1% 20% 32.2%), rgb(36.5% 36.5% 43.5%))",
                    boxShadow: 4,
                    transform: "scale(1.07)",
                  },
                  "&:active": {
                    background: showDetails
                      ? "#24292f"
                      : "linear-gradient(var(--angle), rgb(16.1% 20% 32.2%), rgb(36.5% 36.5% 43.5%))",
                  },
                  userSelect: "none",
                  minWidth: 0,
                }}
                aria-label={showDetails ? "Hide details" : "Show details"}
                size="small"
              >
                <InfoOutlinedIcon />
              </IconButton>
            ) : (
              <Button
                onClick={() => setShowDetails(!showDetails)}
                variant="contained"
                color="inherit"
                startIcon={<InfoOutlinedIcon />}
                size="large"
                sx={{
                  background: showDetails
                    ? "linear-gradient(var(--angle), rgb(16.1% 20% 32.2%), rgb(36.5% 36.5% 43.5%))"
                    : "#24292f",
                  color: "#fff",
                  borderRadius: "999px",
                  transition:
                    "transform 0.15s, box-shadow 0.15s, background 0.15s",
                  "&:hover": {
                    background: showDetails
                      ? "#24292f"
                      : "linear-gradient(var(--angle), rgb(16.1% 20% 32.2%), rgb(36.5% 36.5% 43.5%))",
                    boxShadow: 4,
                    transform: "scale(1.07)",
                  },
                  "&:active": {
                    background: showDetails
                      ? "#24292f"
                      : "linear-gradient(var(--angle), rgb(16.1% 20% 32.2%), rgb(36.5% 36.5% 43.5%))",
                  },
                  userSelect: "none",
                  minWidth: 0,
                }}
                aria-label={showDetails ? "Hide details" : "Show details"}
              >
                {showDetails ? "Hide Info" : "Show Info"}
              </Button>
            )}
          </Tooltip>
        </Box>

        {/* Content Section */}
        <Box
          ref={contentRef}
          sx={{
            flex: "1 1 0",
            overflowY: "auto",
            width: "100%",
            mb: 1,
            minHeight: 0, // Required for flexbox scroll
          }}
        >
          {videoUrl && (
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                }}
              >
                <iframe
                  src={isMultiVideo ? videoUrl[currentVideo] : videoUrl}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: 8,
                    background: "#000",
                  }}
                  allowFullScreen
                  title={title}
                />
              </Box>
              {isMultiVideo && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    mt: 1,
                    flexWrap: "wrap",
                  }}
                >
                  {videoUrl.map((vid, idx) => (
                    <Box
                      key={idx}
                      onClick={() => setCurrentVideo(idx)}
                      sx={{
                        width: 60,
                        height: 34,
                        borderRadius: 2,
                        overflow: "hidden",
                        border:
                          currentVideo === idx
                            ? "2px solid #3f4e7c"
                            : "1px solid #ccc",
                        cursor: "pointer",
                        opacity: currentVideo === idx ? 1 : 0.7,
                        transition: "border 0.2s, opacity 0.2s",
                        background: "#fff",
                        boxShadow: currentVideo === idx ? 3 : 1,
                      }}
                    >
                      <iframe
                        src={vid}
                        style={{
                          pointerEvents: "none",
                          width: "100%",
                          height: "100%",
                          border: "none",
                          borderRadius: 2,
                          background: "#000",
                        }}
                        title={`Video ${idx + 1}`}
                      />
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          )}
          <Collapse
            in={showDetails}
            onEntered={() => {
              if (contentRef.current) {
                contentRef.current.scrollTo({
                  top: contentRef.current.scrollHeight,
                  behavior: "smooth",
                });
              }
            }}
          >
            <Box
              sx={{
                p: 2,
                bgcolor: "background.paper",
                borderRadius: 1,
                mt: 1,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Objectives
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {objectives}
              </Typography>
              <Divider />
              <Typography variant="h6" sx={{ fontWeight: 700, mt: 2 }}>
                Learning Outcomes
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {learningOutcomes}
              </Typography>
              <Divider />
              {repoUrl && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mt: 2,
                  }}
                >
                  <IconButton
                    component="a"
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Repository"
                    size="small"
                    sx={{ color: "#333" }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <Typography
                    variant="body2"
                    component="a"
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#3f4e7c",
                      textDecoration: "underline",
                      wordBreak: "break-all",
                    }}
                  >
                    {repoUrl}
                  </Typography>
                </Box>
              )}
            </Box>
          </Collapse>
        </Box>

        {/* Bottom Row */}
        <Box
          sx={{
            flex: "0 0 auto",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "flex-start", sm: "space-between" },
            alignItems: { xs: "stretch", sm: "center" },
            mt: 2,
            gap: { xs: 1, sm: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "auto" },
              overflowX: { xs: "auto", sm: "visible" },
            }}
          >
            {Array.isArray(techStack) && techStack.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {techStack.map((tech, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      px: 1.2,
                      py: 0.4,
                      borderRadius: "12px",
                      bgcolor: "#f0f4f8",
                      color: "#3f4e7c",
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      fontWeight: 500,
                      border: "1px solid #e0e0e0",
                      letterSpacing: 0.2,
                      userSelect: "none",
                      whiteSpace: "nowrap",
                      minWidth: 0,
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-end", sm: "flex-end" },
              alignItems: "center",
              mt: { xs: 1, sm: 0 },
            }}
          >
            {repoUrl && (
              <Box
                component="a"
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: { xs: 1.2, sm: 2 },
                  py: { xs: 0.6, sm: 1 },
                  bgcolor: "#24292f",
                  color: "#fff",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 600,
                  boxShadow: 2,
                  fontSize: { xs: "0.92rem", sm: "1rem" },
                  transition: "transform 0.15s, box-shadow 0.15s",
                  "&:hover": {
                    transform: "scale(1.07)",
                    boxShadow: 4,
                    bgcolor: "#333",
                  },
                }}
                aria-label="View Repository"
              >
                <GitHubIcon sx={{ fontSize: { xs: 22, sm: 28 } }} />
                <span style={{ fontSize: "inherit" }}>View Repo</span>
              </Box>
            )}
          </Box>
        </Box>
      </Paper>
    </Fade>
  );
}
