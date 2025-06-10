import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Divider,
  Fade,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function DevCard({
  title,
  description,
  videoUrl,
  repoUrl,
  objectives,
  learningOutcomes,
  techStack,
  writeup,
}) {
  const isMultiVideo = Array.isArray(videoUrl);
  const [currentVideo, setCurrentVideo] = useState(isMultiVideo ? 0 : null);

  const [showFade, setShowFade] = useState(false);

  useEffect(() => {
    setShowFade(true);
  }, []);

  const contentRef = useRef(null);

  return (
    <Fade in={showFade} timeout={500}>
      <Paper
        sx={{
          p: 2,
          m: 1,
          display: "flex",
          flexDirection: "column",
          height: { xs: "70vh", sm: "70vh", md: "75vh" },
          maxHeight: { xs: "80vh", sm: "70vh", md: "75vh" },
          minHeight: { xs: "60vh", sm: "50vh", md: "55vh" },
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
            <Typography variant="body1" align="left" sx={{ color: "#555" }}>
              {description}
            </Typography>
          </Box>
        </Box>

        {/* Content Section */}
        <Box
          ref={contentRef}
          sx={{
            flex: "1 1 0",
            overflowY: "auto",
            width: "100%",
            my: 1,
            minHeight: 0,
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
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Box
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
                      <Typography
                        variant="caption"
                        sx={{ mt: 0.5, color: "#666" }}
                      >
                        {idx === 0
                          ? "Overview"
                          : idx === 1
                          ? "Demonstration"
                          : `Video ${idx + 1}`}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          )}
          {/* Always visible details section */}
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
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 2 }}>
              Lenn's Writeup
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {writeup}
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
        </Box>

        {/* Bottom Row */}
        <Box
          sx={{
            flex: "0 0 auto",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "flex-start", sm: "space-between" },
            alignItems: { xs: "stretch", sm: "center" },
            mt: 1,
            gap: { xs: 1, sm: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "auto" },
              overflowX: { xs: "auto", sm: "visible" },
            }}
            onPointerDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {Array.isArray(techStack) && techStack.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: { xs: "nowrap", sm: "wrap" },
                  gap: 1,
                  pb: { xs: 0.5, sm: 0 },
                }}
              >
                {techStack.map((tech, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      px: { xs: 1, sm: 1.2 },
                      py: { xs: 0.3, sm: 0.4 },
                      borderRadius: "12px",
                      bgcolor: "#f0f4f8",
                      color: "#3f4e7c",
                      fontSize: { xs: "0.8rem", sm: "0.95rem" },
                      fontWeight: 500,
                      border: "1px solid #e0e0e0",
                      letterSpacing: 0.2,
                      userSelect: "none",
                      whiteSpace: "nowrap",
                      minWidth: 0,
                      flex: "0 0 auto", // prevent shrinking
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
              mt: { xs: 0, sm: 0 },
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
