import React from "react";
import Theme from "./theme";
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
      <Router>
        <AppBarComponent />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dev" element={<Dev />} />
          <Route path="/design" element={<Design />} />
        </Routes>
        <BottomBar />
      </Router>
    </ThemeProvider>
  );
}

export default App;
