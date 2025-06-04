import React from "react";
import { Box, Typography } from "@mui/material";

export default function BottomBar() {
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        bgcolor: "rgba(16, 20, 32, 0.95)",
        color: "#fff",
        p: 1,
        textAlign: "left",
        zIndex: 1300,
        // fontSize: "0.95rem",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.08)",
        color: "rgba(255, 255, 255, 0.81)",
      }}
    >
      <Typography variant="body2">
        Designed & Built by: Lennard Szyperski, 2025 
      </Typography>
    </Box>
  );
}