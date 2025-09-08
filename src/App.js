import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResearchSection from './components/ResearchSection';
import DataVisualization from './components/DataVisualization';
import TechSection from './components/TechSection';
import ApplicationsSection from './components/ApplicationsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ResearchSection />
      <DataVisualization />
      <TechSection />
      <ApplicationsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App; 