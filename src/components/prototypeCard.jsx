import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Fade,
  IconButton,
  Tooltip,
} from "@mui/material";

function FigmaIcon(props) {
  return (
    <img
      src="https://res.cloudinary.com/dcuh2fjgt/image/upload/v1749590600/figma_susjht.svg"
      alt="Figma"
      style={{
        width: 35,
        height: 35,
        display: "inline-block",
        verticalAlign: "middle",
      }}
      {...props}
    />
  );
}

export default function PrototypeCard({
  title,
  description,
  figmaEmbedCode,
  youtubeEmbedCode,
  objectives,
  learningOutcomes,
  skillsApplied,
}) {
  const [showFade, setShowFade] = useState(false);

  useEffect(() => {
    setShowFade(true);
  }, []);

  // Helper to get Figma share link from embed code
  const getFigmaShareUrl = (embedUrl) => {
    if (!embedUrl) return null;
    try {
      const url = new URL(embedUrl);
      if (url.hostname === "embed.figma.com") {
        const protoUrl = url.searchParams.get("proto");
        if (protoUrl) return protoUrl;
        // fallback: convert embed.figma.com/proto/xxx to figma.com/proto/xxx
        return embedUrl.replace("embed.figma.com", "figma.com");
      }
      return embedUrl;
    } catch {
      return embedUrl;
    }
  };

  return (
    <Fade in={showFade} timeout={500}>
      <Paper
        sx={{
          p: 2,
          m: 1,
          display: "flex",
          flexDirection: "column",
          height: { xs: "70vh", sm: "70vh", md: "75vh" },
          maxHeight: { xs: "65vh", sm: "70vh", md: "75vh" },
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
          {figmaEmbedCode && (
            <Tooltip title="View Prototype" arrow>
              <IconButton
                href={getFigmaShareUrl(figmaEmbedCode)}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  ml: 1,
                  p: 0.5,
                }}
                aria-label="Open Figma Prototype"
              >
                <FigmaIcon style={{ width: 50, height: 50 }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            flex: "1 1 0",
            overflowY: "auto",
            width: "100%",
            my: 1,
            minHeight: 0,
          }}
        >
          {/* Only show YouTube video */}
          {youtubeEmbedCode && (
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                }}
              >
                <iframe
                  src={youtubeEmbedCode}
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
            </Box>
          )}

          {/* details section */}
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
              Skills Applied
            </Typography>
            <Typography variant="body2">{skillsApplied}</Typography>
          </Box>
        </Box>
      </Paper>
    </Fade>
  );
}
