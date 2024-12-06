import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Careers from './components/Careers';
import Technologies from './components/Technologies';
import WorkingProcess from './components/WorkingProcess';
import ProcessFlow from './components/ProcessFlow';
import Services from './components/Services';
import Contact from './components/Contact';
import Community from './components/Community';
import About from './components/About';
import LoadingSpinner from './components/LoadingSpinner';  // Import the LoadingSpinner
import Loader from './components/Loader';

function App() {

  return (
    
    <Router>
      <Header />
      <Routes>
        
        <Route path="/" element={<HeroSection />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/working-methods" element={<WorkingProcess />} />
        <Route path="/process-flow" element={<ProcessFlow />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
