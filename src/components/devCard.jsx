import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Tooltip,
  Chip,
  Stack,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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

  return (
    <Paper sx={{ p: 2, m: 1, position: "relative" }}>
      {/* Info Button */}
      <Tooltip title={showDetails ? "Hide details" : "Show details"}>
        <IconButton
          size="large"
          sx={{ position: "absolute", top: 8, right: 8 }}
          onClick={() => setShowDetails(!showDetails)}
          aria-label={showDetails ? "Hide details" : "Show details"}
        >
          <InfoOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Typography variant="h5" align="left" sx={{ color: "#333" }}>
        {title}
      </Typography>
      <Typography variant="body1" align="left" sx={{ mb: 2, color: "#555" }}>
        {description}
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingBottom: "56.25%",
          mb: 1,
        }}
      >
        {!showDetails && videoUrl && (
          <iframe
            src={videoUrl}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: 8,
            }}
            allowFullScreen
            title={title}
          />
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
              display: "flex",
              flexDirection: "column",
              gap: 2,
              background: "transparent",
            }}
          >
            <Paper elevation={1} sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Objectives
              </Typography>
              <Typography variant="body2">{objectives}</Typography>
            </Paper>
            <Paper elevation={1} sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Learning Outcomes
              </Typography>
              <Typography variant="body2">{learningOutcomes}</Typography>
            </Paper>
            <Paper elevation={1} sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Tech Stack
              </Typography>
              <Typography variant="body2">{techStack}</Typography>
            </Paper>
            {repoUrl && (
              <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Repository
                </Typography>
                <Typography variant="body2">
                  <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                    {repoUrl}
                  </a>
                </Typography>
              </Paper>
            )}
          </Box>
        )}
      </Box>
      {/* Tech Stack Chips */}
      {Array.isArray(techStack) && techStack.length > 0 && (
        <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap" }}>
          {techStack.map((tech, idx) => (
            <Chip key={idx} label={tech} variant="filled" />
          ))}
        </Stack>
      )}
    </Paper>
  );
}
