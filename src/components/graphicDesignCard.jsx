import React, { useState } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";

export default function GraphicDesignCard({
  title,
  description,
  imageUrl, // Single Cloudinary image URL
  objectives,
  learningOutcomes,
  skillsApplied,
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Paper sx={{ p: 2, m: 1, position: "relative" }}>
      {/* Read More Button */}
      <Button
        variant="outlined"
        size="small"
        sx={{ position: "absolute", top: 8, right: 8 }}
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Back to Image" : "Read More"}
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
        {!showDetails && imageUrl && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={imageUrl}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          </Box>
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
    </Paper>
  );
}
