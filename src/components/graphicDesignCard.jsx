import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  IconButton,
  Modal,
} from "@mui/material";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap"; // Add this import

export default function GraphicDesignCard({
  title,
  description,
  imageUrls,
  imageUrl, // for backward compatibility
  objectives,
  learningOutcomes,
  skillsApplied,
  imageOrientation = "landscape", // "portrait" or "landscape"
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false); // Fullscreen modal state

  // Use imageUrls array, or fallback to single imageUrl
  const images =
    imageUrls && imageUrls.length > 0 ? imageUrls : imageUrl ? [imageUrl] : [];

  // Set aspect ratio based on orientation
  const aspectRatio = imageOrientation === "portrait" ? "75%" : "56.25%"; // 4:3 for portrait, 16:9 for landscape

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
          paddingBottom: aspectRatio,
          mb: 1,
        }}
      >
        {!showDetails && images.length > 0 && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Fullscreen IconButton */}
            <IconButton
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 3,
                background: "rgba(255,255,255,0.7)",
                "&:hover": { background: "rgba(255,255,255,0.9)" },
              }}
              onClick={() => setFullscreenOpen(true)}
              aria-label="Open fullscreen"
            >
              <ZoomOutMapIcon />
            </IconButton>
            <img
              src={images[currentImage]}
              alt={`${title} ${currentImage + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: 8,
                background: "transparent",
                transition: "opacity 0.3s",
              }}
            />
            {/* Thumbnails or dot gallery */}
            {images.length > 1 && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 8,
                  left: 0,
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: { xs: 1, md: 2 }, // slightly larger gap for bigger thumbs
                  zIndex: 2,
                }}
              >
                {images.map((img, idx) => (
                  <Box
                    key={img}
                    onClick={() => setCurrentImage(idx)}
                    sx={{
                      width: { xs: 30, md: 80 }, // bigger thumbnail
                      height: { xs: 30, md: 80 }, // make it square
                      borderRadius: 2, // less rounded for square look
                      border:
                        idx === currentImage
                          ? "2px solid #333"
                          : "2px solid #ccc",
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      cursor: "pointer",
                      opacity: idx === currentImage ? 1 : 0.7,
                      boxShadow: idx === currentImage ? "0 0 6px #333" : "none",
                      transition: "border 0.2s, opacity 0.2s",
                    }}
                    aria-label={`Show image ${idx + 1}`}
                  />
                ))}
              </Box>
            )}
            {images.length > 1 && (
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  background: "rgba(255,255,255,0.7)",
                  borderRadius: 2,
                  px: 1,
                  py: 0.5,
                  fontSize: 12,
                  pointerEvents: "none",
                }}
              >
                {currentImage + 1} / {images.length}
              </Box>
            )}
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
      {/* Fullscreen Modal */}
      <Modal
        open={fullscreenOpen}
        onClose={() => setFullscreenOpen(false)}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            outline: "none",
            maxWidth: "90vw",
            maxHeight: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "rgba(0,0,0,0.95)",
            borderRadius: 2,
            p: 2,
          }}
        >
          <img
            src={images[currentImage]}
            alt={`${title} fullscreen`}
            style={{
              maxWidth: "80vw",
              maxHeight: "80vh",
              objectFit: "contain",
              borderRadius: 8,
              background: "transparent",
              margin: "auto",
              display: "block",
            }}
          />
        </Box>
      </Modal>
    </Paper>
  );
}
