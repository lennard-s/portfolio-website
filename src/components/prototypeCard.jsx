import React, { useState, useEffect } from "react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Paper,
  Divider,
  Fade,
} from "@mui/material";

export default function PrototypeCard({
  title,
  description,
  figmaEmbedCode,
  youtubeEmbedCode,
  objectives,
  learningOutcomes,
  skillsApplied,
}) {
  const hasBothMedia = figmaEmbedCode && youtubeEmbedCode;
  const [mediaTab, setMediaTab] = useState(hasBothMedia ? 0 : 0);
  const [showFade, setShowFade] = useState(false);

  useEffect(() => {
    setShowFade(true);
  }, []);

  const handleMediaTabChange = (event, newValue) => {
    if (newValue !== null) setMediaTab(newValue);
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
          {/* Media */}
          {(figmaEmbedCode || youtubeEmbedCode) && (
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                }}
              >
                {(!hasBothMedia || mediaTab === 0) && figmaEmbedCode && (
                  <iframe
                    src={figmaEmbedCode}
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
                )}
                {hasBothMedia && mediaTab === 1 && youtubeEmbedCode && (
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
                )}
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

        {hasBothMedia && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mt: 1,
              mb: 0.5,
            }}
          >
            <ToggleButtonGroup
              value={mediaTab}
              exclusive
              onChange={handleMediaTabChange}
              size="small"
              sx={{
                background: "#24292f",
                borderRadius: "999px",
                overflow: "hidden",
                minHeight: 28,
                "& .MuiToggleButton-root": {
                  px: 1,
                  py: 0.1,
                  fontSize: "0.72rem",
                  minWidth: 0,
                  border: "none",
                  borderRadius: 0,
                  color: "#fff",
                  fontWeight: 600,
                  "&:first-of-type": {
                    borderTopLeftRadius: "999px",
                    borderBottomLeftRadius: "999px",
                  },
                  "&:last-of-type": {
                    borderTopRightRadius: "999px",
                    borderBottomRightRadius: "999px",
                  },
                  "&.Mui-selected": {
                    background:
                      "linear-gradient(var(--angle), rgb(16.1% 20% 32.2%), rgb(36.5% 36.5% 43.5%))",
                    color: "#fff",
                  },
                  "&:not(:last-of-type)": {
                    borderRight: "1px solid #444",
                  },
                },
              }}
            >
              <ToggleButton value={0}>Figma</ToggleButton>
              <ToggleButton value={1}>Video</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        )}
      </Paper>
    </Fade>
  );
}
