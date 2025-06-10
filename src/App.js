import React from "react";
import Theme from "./theme";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import Dev from "./pages/dev";
import Design from "./pages/design";
import AppBarComponent from "./components/appBar";
import BottomBar from "./components/bottomBar";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router basename="/~lcs9244/portfolio">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh", // Full viewport height
          }}
        >
          <AppBarComponent />
          <Box
            component="main"
            sx={{
              flex: 1, // Fills space between AppBar and BottomBar
              overflow: "hidden", // Allows scrolling for long content
              pb: { xs: 6, md: 0 }, // Prevents BottomBar overlap on mobile
            }}
          >
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dev" element={<Dev />} />
              <Route path="/design" element={<Design />} />
            </Routes>
          </Box>
          <BottomBar />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
