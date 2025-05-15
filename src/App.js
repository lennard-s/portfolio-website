import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import Resume from './pages/resume';
import Contact from './pages/contact';
import Dev from './pages/dev';
import Design from './pages/design';
import AppBarComponent from './components/appBar';

function App() {
  return (
    <Router>
      <AppBarComponent />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/design" element={<Design />} />
      </Routes>
    </Router>
  );
}

export default App;