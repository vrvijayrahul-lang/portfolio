import React from 'react';
import BackgroundAtmosphere from './components/BackgroundAtmosphere';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050507] text-[#EDE9FE] selection:bg-violet-600/30 selection:text-white">
      {/* Dynamic atmospheric ambient background */}
      <BackgroundAtmosphere />

      {/* Floating Island Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Selected Projects Portfolio Gallery */}
        <Projects />

        {/* Skills & Toolkit Section */}
        <Skills />

        {/* Contact & Inquiries Section */}
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
