import React, { useState, useEffect } from "react";
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

  return (
    <Fade in={showFade} timeout={500}>
      <Paper sx={{ p: 2, m: 1, position: "relative" }}>
        {/* Top Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* Title and Description */}
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
          {/* Info Button */}
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
          sx={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
            mb: 1,
          }}
        >
          {!showDetails && videoUrl && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: 0,
                background: "#000",
              }}
            >
              {/* Main Video */}
              <Box
                sx={{
                  flex: 1,
                  height: "100%",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  right: isMultiVideo ? 80 : 0, // leave space for selector if needed
                  transition: "right 0.2s",
                  display: "flex",
                }}
              >
                <iframe
                  src={isMultiVideo ? videoUrl[currentVideo] : videoUrl}
                  style={{
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
              {/* Video Selector */}
              {isMultiVideo && (
                <Box
                  sx={{
                    width: 80,
                    height: "100%",
                    position: "absolute",
                    right: 0,
                    top: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: 1,
                    zIndex: 2,
                    background: "rgba(255,255,255,0.05)",
                    p: 1,
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
          {/* Details Section */}
          {showDetails && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflowY: "auto",
                p: { xs: 2, sm: 3 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 2,
                background: "rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(6px)",
                borderRadius: 2,
                boxShadow: 1,
                zIndex: 2,
              }}
            >
              <Box>
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
              </Box>
              {repoUrl && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      alignSelf: "flex-start",
                      gap: 1,
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
                        fontSize: "0.95rem",
                      }}
                    >
                      {repoUrl}
                    </Typography>
                  </Box>
                </>
              )}
            </Box>
          )}
        </Box>

        {/* Bottom Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          {/* Tech Stack Chips */}
          <Box>
            {Array.isArray(techStack) && techStack.length > 0 && (
              <Box sx={{ mt: 0, display: "flex", flexWrap: "wrap", gap: 1 }}>
                {techStack.map((tech, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "12px",
                      bgcolor: "#f0f4f8",
                      color: "#3f4e7c",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      border: "1px solid #e0e0e0",
                      letterSpacing: 0.2,
                      userSelect: "none",
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
          <Box>
            {/* Repo IconButton */}
            {repoUrl && (
              <Box
                sx={{
                  zIndex: 3,
                }}
              >
                <Box
                  component="a"
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2,
                    py: 1,
                    bgcolor: "#24292f",
                    color: "#fff",
                    borderRadius: "999px",
                    textDecoration: "none",
                    fontWeight: 600,
                    boxShadow: 2,
                    transition: "transform 0.15s, box-shadow 0.15s",
                    "&:hover": {
                      transform: "scale(1.07)",
                      boxShadow: 4,
                      bgcolor: "#333",
                    },
                  }}
                  aria-label="View Repository"
                >
                  <GitHubIcon sx={{ fontSize: 28 }} />
                  <span style={{ fontSize: "1rem" }}>View Repo</span>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Paper>
    </Fade>
  );
}
