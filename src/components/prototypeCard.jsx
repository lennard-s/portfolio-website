import React, { useState } from "react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Paper,
  Button,
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
  const [mediaTab, setMediaTab] = useState(1);
  const [showDetails, setShowDetails] = useState(false); // Toggle for "Read More" content

  const handleMediaTabChange = (event, newValue) => {
    if (newValue !== null) setMediaTab(newValue);
  };

  const hasBothMedia = figmaEmbedCode && youtubeEmbedCode;

  return (
    <Paper
      sx={{
        p: 2,
        m: 1,
        position: "relative",
      }}
    >
      {/* Read More Button */}
      <Button
        variant="outlined"
        size="small"
        sx={{ position: "absolute", top: 8, right: 8 }}
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Back to Media" : "Read More"}
      </Button>
      <Typography variant="h5" align="left" sx={{ color: "#333" }}>
        {title}
      </Typography>
      <Typography variant="body1" align="left" sx={{ mb: 2, color: "#555" }}>
        {description}
      </Typography>

      {/* Content Box */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingBottom: "56.25%",
          mb: 1,
        }}
      >
        {!showDetails && (
          <>
            {(!hasBothMedia || mediaTab === 0) && figmaEmbedCode && (
              <iframe
                src={figmaEmbedCode}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                allowFullScreen
                frameBorder="0"
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
                }}
                allowFullScreen
                frameBorder="0"
                title={title}
              />
            )}
          </>
        )}
        {showDetails && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              overflowY: "auto",
              p: 2,
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              Objectives
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {objectives}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Learning Outcomes
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {learningOutcomes}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Skills Applied
            </Typography>
            <Typography variant="body2">{skillsApplied}</Typography>
          </Box>
        )}
      </Box>
      {/* Option to hide the toggles if both media aren't present */}
      {/* {hasBothMedia && ( */}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <ToggleButtonGroup
          value={mediaTab}
          exclusive
          onChange={handleMediaTabChange}
          size="small"
        >
          <ToggleButton value={0} sx={{ textTransform: "none" }}>
            Figma Prototype
          </ToggleButton>
          <ToggleButton value={1} sx={{ textTransform: "none" }}>
            YouTube Video
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {/* )} */}
    </Paper>
  );
}
