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
    MuiChip: {
      styleOverrides: {
        root: {
          "--angle": "45deg",
          background:
            "linear-gradient(var(--angle), rgb(63, 78, 124), rgb(93,93,111))", // fallback for rgb %
          backgroundImage:
            "linear-gradient(var(--angle), rgb(16.1% 20% 32.2%), rgb(36.5% 36.5% 43.5%))",
          color: "#fff",
          fontWeight: 600,
        },
        label: {
          background:
            // "linear-gradient(var(--angle), rgb(247,183,163), rgb(235,186,185), rgb(242,216,216), rgb(240,234,214))", // fallback
            "white",
          backgroundImage:
            // "linear-gradient(var(--angle), rgb(96.9% 71.8% 63.9%), rgb(92.2% 72.9% 72.5%), rgb(94.9% 84.7% 84.7%), rgb(94.1% 91.8% 83.9%))",
            "white",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "rgba(60, 70, 110, 0.92)",
          fontWeight: 500,
          background:
            "linear-gradient(var(--angle), rgb(94.1% 91.8% 93.3%), rgb(91% 87.1% 88.2%))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          transition: "color 0.2s, font-weight 0.2s",
          // textTransform: "none",
          padding: "12px 24px",
        },
        selected: {
          fontWeight: 700,
          WebkitTextFillColor: "unset",
          color: "#222",
        },
      },
    },
  },
});

export default theme;
