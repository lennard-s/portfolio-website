import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(to right, #f0f4f8, #d9e2ec)",
          minHeight: "100vh",
          backgroundAttachment: "fixed",
        },
        // Custom scrollbar styles
        "*::-webkit-scrollbar": {
          width: "8px",
          background: "transparent",
        },
        "*::-webkit-scrollbar-thumb": {
          background: "rgba(120, 144, 156, 0.3)",
          borderRadius: "8px",
        },
        "*": {
          scrollbarColor: "rgba(120,144,156,0.3) transparent",
          scrollbarWidth: "thin",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "--angle": "135deg",
          background:
            "linear-gradient(var(--angle), rgba(250, 250, 250, 0.5), rgba(240, 248, 255, 0.5))",
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          "--angle": "135deg",
          background:
            "linear-gradient(var(--angle), rgba(250, 250, 250, 0.5), rgba(240, 248, 255, 0.5)) !important",
          // Ensure the modal background covers the overlay
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
