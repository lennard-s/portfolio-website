import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import Resume from './pages/resume';
import AppBarComponent from './components/appBar';

function App() {
  return (
    <Router>
      <AppBarComponent />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;